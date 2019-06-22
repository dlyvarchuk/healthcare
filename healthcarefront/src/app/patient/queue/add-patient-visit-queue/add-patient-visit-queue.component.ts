import { Component, OnInit } from '@angular/core';
import {PatientVisitQueue} from '../../../models/PatientVisitQueue';
import {PatientVisitQueueService} from '../../../services/patient-visit-queue.service';
import {NgForm} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {PatientQueueNumberComponent} from '../patient-queue-number.component';
import {Staff} from '../../../models/Staff';
import {StaffService} from '../../../services/staff.service';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../auth/user.model';

@Component({
  selector: 'app-add-patient-visit-queue',
  templateUrl: './add-patient-visit-queue.component.html',
  styleUrls: ['./add-patient-visit-queue.component.css']
})
export class AddPatientVisitQueueComponent implements OnInit {

  private user: User;
  patientVisitQueues: PatientVisitQueue[] = [];
  patientVisitQueue: PatientVisitQueue = new PatientVisitQueue();
  staffs: Staff[] = [];
  minDate;
  queue_member = 0;

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private patientVisitQueueService: PatientVisitQueueService,
    private staffsService: StaffService
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.getStaffs();
    this.getPatientVisitQueues();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getFullDay() - 1);
  }


  private getStaffs() {
    this.staffsService.getAll().subscribe((res) => {
      this.staffs = res ? res : [];
    });
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
    this.patientVisitQueue = {...this.patientVisitQueue, ...patientVisitQueueForm.value};
    this.patientVisitQueue.patient_id = this.user.userId;
    this.queue_member += 1;
    this.patientVisitQueue.queue_member = this.queue_member.toString();
    this.patientVisitQueueService.create(this.patientVisitQueue).subscribe((newPatientVisitQueue) => {
      this.patientVisitQueues.push(newPatientVisitQueue);
    });
    this.dialog.open(PatientQueueNumberComponent, {
      data: {
        queueNumber: this.queue_member
      }
    });
  }
}
