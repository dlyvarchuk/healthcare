import { Component, OnInit } from '@angular/core';
import {StaffQueue} from '../../../models/StaffQueue';
import {StaffQueueService} from '../../../services/staff-queue.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-all-staff-queue',
  templateUrl: './all-staff-queue.component.html',
  styleUrls: ['./all-staff-queue.component.css']
})
export class AllStaffQueueComponent implements OnInit {

  staffQueues: StaffQueue[] = [];
  staffQueue: StaffQueue = new StaffQueue();
  minDate;

  constructor(
    private staffQueueService: StaffQueueService,
  ) { }

  ngOnInit() {
    this.getStaffQueues();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getFullDay() - 1);
  }

  private getStaffQueues() {
    this.staffQueueService.getAll().subscribe((res) => {
      this.staffQueues = res ? res : [];
    });
  }

  private removeStaffQueue(staffQueue: StaffQueue) {
    this.staffQueueService.delete(staffQueue._id).subscribe(() => {
      this.getStaffQueues();
    });
  }

  private createStaffQueue(staffQueueForm: NgForm) {
    this.staffQueueService.create(staffQueueForm.value).subscribe((newStaffQueue) => {
      this.staffQueues.push(newStaffQueue);
    });
  }

}
