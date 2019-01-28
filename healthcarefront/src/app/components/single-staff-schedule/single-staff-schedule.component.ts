import {Component, Input, OnInit} from '@angular/core';
import {StaffSchedule} from '../../models/StaffSchedule';

@Component({
  selector: 'app-single-staff-schedule',
  templateUrl: './single-staff-schedule.component.html',
  styleUrls: ['./single-staff-schedule.component.css']
})
export class SingleStaffScheduleComponent implements OnInit {
  @Input() staffScheduleInput: StaffSchedule = new StaffSchedule();
  constructor() { }

  ngOnInit() {
  }

}
