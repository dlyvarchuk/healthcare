import { Component, OnInit } from '@angular/core';
import {PatientDiagnosis} from '../../../models/PatientDiagnosis';
import {PatientDiagnosisService} from '../../../services/patient-diagnosis.service';
import {NgForm} from '@angular/forms';
import {Staff} from '../../../models/Staff';
import {StaffService} from '../../../services/staff.service';
import {Patient} from '../../../models/Patient';
import {PatientService} from '../../../services/patient.service';

@Component({
  selector: 'app-all-patient-diagnosis',
  templateUrl: './all-patient-diagnosis.component.html',
  styleUrls: ['./all-patient-diagnosis.component.css']
})
export class AllPatientDiagnosisComponent implements OnInit {

  displayedColumns = ['reported_date', 'diagnosis_name', 'patient_id', 'reported_staff_id'];
  patients: Patient[] = [];
  patientDiagnoses: PatientDiagnosis[] = [];
  patientDiagnosis: PatientDiagnosis = new PatientDiagnosis();
  staffs: Staff[] = [];
  minDate;

  constructor(
    private patientsService: PatientService,
    private patientDiagnosisService: PatientDiagnosisService,
    private staffsService: StaffService
  ) { }

  ngOnInit() {
    this.getPatients();
    this.getPatientDiagnoses();
    this.getStaffs();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getFullDay() - 1);
  }

  private getPatients() {
    this.patientsService.getAll().subscribe((res) => {
      this.patients = res ? res : [];
    });
  }
  private getStaffs() {
    this.staffsService.getAll().subscribe((res) => {
      this.staffs = res ? res : [];
    });
  }
  private getPatientDiagnoses() {
    this.patientDiagnosisService.getAll().subscribe((res) => {
      this.patientDiagnoses = res ? res : [];
    });
  }

  private removePatientDiagnosis(patientDiagnosis: PatientDiagnosis) {
    this.patientDiagnosisService.delete(patientDiagnosis._id).subscribe(() => {
      this.getPatientDiagnoses();
    });
  }

  private createPatientDiagnosis(patientDiagnosisForm: NgForm) {
    this.patientDiagnosisService.create(patientDiagnosisForm.value).subscribe((newPatientDiagnosis) => {
      this.patientDiagnoses.push(newPatientDiagnosis);
    });
    this.getPatientDiagnoses();
  }

}
