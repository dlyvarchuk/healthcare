import { Component, OnInit } from '@angular/core';
import {PatientVisitQueue} from '../../models/PatientVisitQueue';
import {ActivatedRoute} from '@angular/router';
import {PatientVisitQueueService} from '../../services/patient-visit-queue.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update-patient-visit-queue',
  templateUrl: './update-patient-visit-queue.component.html',
  styleUrls: ['./update-patient-visit-queue.component.css']
})
export class UpdatePatientVisitQueueComponent implements OnInit {

  patientVisitQueue: PatientVisitQueue = new PatientVisitQueue();

  constructor(
    private activatedRoute: ActivatedRoute,
    private patientVisitQueueService: PatientVisitQueueService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.patientVisitQueueService.getById(data._id).subscribe((newData) => {
        this.patientVisitQueue = newData;
      });
    });
  }
  updatePatientVisitQueue(updateForm: NgForm) {
    this.patientVisitQueue = {...this.patientVisitQueue, ...updateForm.value};
    this.patientVisitQueueService.update(this.patientVisitQueue._id, this.patientVisitQueue).subscribe((res) => {
      this.patientVisitQueue = res;
    });
  }

}
