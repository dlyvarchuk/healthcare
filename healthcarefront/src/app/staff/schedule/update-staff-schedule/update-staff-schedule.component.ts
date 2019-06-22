import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {StaffSchedule} from '../../../models/StaffSchedule';
import {StaffScheduleService} from '../../../services/staff-schedule.service';

@Component({
  selector: 'app-update-staff-schedule',
  templateUrl: './update-staff-schedule.component.html',
  styleUrls: ['./update-staff-schedule.component.css']
})
export class UpdateStaffScheduleComponent implements OnInit {

  staffSchedule: StaffSchedule = new StaffSchedule();

  constructor(
    private activatedRoute: ActivatedRoute,
    private staffScheduleService: StaffScheduleService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.staffScheduleService.getById(data._id).subscribe((newData) => {
        this.staffSchedule = newData;
      });
    });
  }
  updateStaffSchedule(updateForm: NgForm) {
    this.staffSchedule = {...this.staffSchedule, ...updateForm.value};
    this.staffScheduleService.update(this.staffSchedule._id, this.staffSchedule).subscribe((res) => {
      this.staffSchedule = res;
    });
  }
}
