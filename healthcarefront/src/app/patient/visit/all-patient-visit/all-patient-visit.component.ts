import { Component, OnInit } from '@angular/core';
import {PatientVisit} from '../../../models/PatientVisit';
import {PatientVisitService} from '../../../services/patient-visit.service';
import {NgForm} from '@angular/forms';
import {Patient} from '../../../models/Patient';
import {PatientDiagnosis} from '../../../models/PatientDiagnosis';
import {PatientService} from '../../../services/patient.service';
import {PatientDiagnosisService} from '../../../services/patient-diagnosis.service';
import {User} from '../../../auth/user.model';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-all-patient-visit',
  templateUrl: './all-patient-visit.component.html',
  styleUrls: ['./all-patient-visit.component.css']
})
export class AllPatientVisitComponent implements OnInit {

  displayedColumns = ['diagnosis_id', 'notes', 'is_high_risk', 'is_contagious', 'reported_date'];
  patients: Patient[] = [];
  patientDiagnoses: PatientDiagnosis[] = [];
  patientVisits: PatientVisit[] = [];
  patientVisit: PatientVisit = new PatientVisit();
  minDate;
  private user: User;

  constructor(
    private patientsService: PatientService,
    private patientDiagnosisService: PatientDiagnosisService,
    private patientVisitService: PatientVisitService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getPatients();
    this.getPatientDiagnoses();
    this.getPatientVisits();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getFullDay() - 1);
    this.user = this.authService.getUser();
    this.doFilter(this.user.userId);
  }


  private getPatients() {
    this.patientsService.getAll().subscribe((res) => {
      this.patients = res ? res : [];
    });
  }
  private getPatientDiagnoses() {
    this.patientDiagnosisService.getAll().subscribe((res) => {
      this.patientDiagnoses = res ? res : [];
    });
  }
  private getPatientVisits() {
    this.patientVisitService.getAll().subscribe((res) => {
      this.patientVisits = res ? res : [];
    });
  }

  private removePatientVisit(patientVisit: PatientVisit) {
    this.patientVisitService.delete(patientVisit._id).subscribe(() => {
      this.getPatientVisits();
    });
  }

  private createPatientVisit(patientVisitForm: NgForm) {
    this.patientVisitService.create(patientVisitForm.value).subscribe((newPatientVisit) => {
      this.patientVisits.push(newPatientVisit);
    });
    this.getPatientVisits();
  }

  private doFilter(filterValue: string) {
    this.patientVisits = this.patientVisits.filter((patientVisit: PatientVisit) => patientVisit._id === filterValue);
  }

}
