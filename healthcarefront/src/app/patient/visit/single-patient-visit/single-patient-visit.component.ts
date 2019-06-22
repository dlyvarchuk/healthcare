import {Component, Input, OnInit} from '@angular/core';
import {PatientVisit} from '../../../models/PatientVisit';

@Component({
  selector: 'app-single-patient-visit',
  templateUrl: './single-patient-visit.component.html',
  styleUrls: ['./single-patient-visit.component.css']
})
export class SinglePatientVisitComponent implements OnInit {

  @Input() patientVisitInput: PatientVisit = new PatientVisit();
  constructor() { }

  ngOnInit() {
  }

}
