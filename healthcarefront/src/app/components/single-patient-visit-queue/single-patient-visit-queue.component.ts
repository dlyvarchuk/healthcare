import {Component, Input, OnInit} from '@angular/core';
import {PatientVisitQueue} from '../../models/PatientVisitQueue';

@Component({
  selector: 'app-single-patient-visit-queue',
  templateUrl: './single-patient-visit-queue.component.html',
  styleUrls: ['./single-patient-visit-queue.component.css']
})
export class SinglePatientVisitQueueComponent implements OnInit {

  @Input() patientVisitQueueInput: PatientVisitQueue = new PatientVisitQueue();
  constructor() { }

  ngOnInit() {
  }

}
