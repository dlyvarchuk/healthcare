import { Component, OnInit } from '@angular/core';
import {PatientVisitQueue} from '../../../models/PatientVisitQueue';
import {PatientVisitQueueService} from '../../../services/patient-visit-queue.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-all-patient-visit-queue',
  templateUrl: './all-patient-visit-queue.component.html',
  styleUrls: ['./all-patient-visit-queue.component.css']
})
export class AllPatientVisitQueueComponent implements OnInit {

  displayedColumns = ['patient_id', 'queue_member', 'date_time', 'staff_id'];
  patientVisitQueues: PatientVisitQueue[] = [];
  patientVisitQueue: PatientVisitQueue = new PatientVisitQueue();
  minDate;

  constructor(
    private patientVisitQueueService: PatientVisitQueueService,
  ) { }

  ngOnInit() {
    this.getPatientVisitQueues();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getFullDay() - 1);
  }

  private getPatientVisitQueues() {
    this.patientVisitQueueService.getAll().subscribe((res) => {
      this.patientVisitQueues = res ? res : [];
    });
  }

  private removePatientVisitQueue(patientVisitQueue: PatientVisitQueue) {
    this.patientVisitQueueService.delete(patientVisitQueue._id).subscribe(() => {
      this.getPatientVisitQueues();
    });
  }

  private createPatientVisitQueue(patientVisitQueueForm: NgForm) {
    this.patientVisitQueueService.create(patientVisitQueueForm.value).subscribe((newPatientVisitQueue) => {
      this.patientVisitQueues.push(newPatientVisitQueue);
    });
  }

}
