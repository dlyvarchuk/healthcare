import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {StaffQueue} from '../../models/StaffQueue';
import {StaffQueueService} from '../../services/staff-queue.service';

@Component({
  selector: 'app-update-staff-queue',
  templateUrl: './update-staff-queue.component.html',
  styleUrls: ['./update-staff-queue.component.css']
})
export class UpdateStaffQueueComponent implements OnInit {

  staffQueue: StaffQueue = new StaffQueue();

  constructor(
    private activatedRoute: ActivatedRoute,
    private staffQueueService: StaffQueueService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.staffQueueService.getById(data._id).subscribe((newData) => {
        this.staffQueue = newData;
      });
    });
  }
  updateStaffQueue(updateForm: NgForm) {
    this.staffQueue = {...this.staffQueue, ...updateForm.value};
    this.staffQueueService.update(this.staffQueue._id, this.staffQueue).subscribe((res) => {
      this.staffQueue = res;
    });
  }
}
