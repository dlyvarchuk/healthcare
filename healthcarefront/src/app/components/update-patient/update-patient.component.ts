import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Patient} from '../../models/Patient';
import {PatientService} from '../../services/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  patient: Patient = new Patient();

  constructor(
    private activatedRoute: ActivatedRoute,
    private patientService: PatientService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.patientService.getById(data._id).subscribe((newData) => {
        this.patient = newData;
      });
    });
  }
  updatePatient(updateForm: NgForm) {
    this.patient = {...this.patient, ...updateForm.value};
    this.patientService.update(this.patient._id, this.patient).subscribe((res) => {
      this.patient = res;
    });
  }
}
