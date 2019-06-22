import { Component, OnInit } from '@angular/core';
import {PatientDiagnosis} from '../../../models/PatientDiagnosis';
import {ActivatedRoute} from '@angular/router';
import {PatientDiagnosisService} from '../../../services/patient-diagnosis.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update-patient-diagnosis',
  templateUrl: './update-patient-diagnosis.component.html',
  styleUrls: ['./update-patient-diagnosis.component.css']
})
export class UpdatePatientDiagnosisComponent implements OnInit {

  patientDiagnosis: PatientDiagnosis = new PatientDiagnosis();

  constructor(
    private activatedRoute: ActivatedRoute,
    private patientDiagnosisService: PatientDiagnosisService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.patientDiagnosisService.getById(data._id).subscribe((newData) => {
        this.patientDiagnosis = newData;
      });
    });
  }
  updatePatientDiagnosis(updateForm: NgForm) {
    this.patientDiagnosis = {...this.patientDiagnosis, ...updateForm.value};
    this.patientDiagnosisService.update(this.patientDiagnosis._id, this.patientDiagnosis).subscribe((res) => {
      this.patientDiagnosis = res;
    });
  }

}
