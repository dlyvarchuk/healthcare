import {Component, Input, OnInit} from '@angular/core';
import {StaffQueue} from '../../models/StaffQueue';

@Component({
  selector: 'app-single-staff-queue',
  templateUrl: './single-staff-queue.component.html',
  styleUrls: ['./single-staff-queue.component.css']
})
export class SingleStaffQueueComponent implements OnInit {

  @Input() staffQueueInput: StaffQueue = new StaffQueue();
  constructor() { }

  ngOnInit() {
  }

}
