import {Component, Input, OnInit} from '@angular/core';
import {PatientDiagnosis} from '../../../models/PatientDiagnosis';

@Component({
  selector: 'app-single-patient-diagnosis',
  templateUrl: './single-patient-diagnosis.component.html',
  styleUrls: ['./single-patient-diagnosis.component.css']
})
export class SinglePatientDiagnosisComponent implements OnInit {

  @Input() patientDiagnosisInput: PatientDiagnosis = new PatientDiagnosis();
  constructor() { }

  ngOnInit() {
  }

}
