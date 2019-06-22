import { Component, OnInit } from '@angular/core';
import {Staff} from '../../../models/Staff';
import {StaffSchedule} from '../../../models/StaffSchedule';
import {StaffScheduleService} from '../../../services/staff-schedule.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-all-staff-schedule',
  templateUrl: './all-staff-schedule.component.html',
  styleUrls: ['./all-staff-schedule.component.css']
})
export class AllStaffScheduleComponent implements OnInit {

  staffSchedules: StaffSchedule[] = [];
  staffSchedule: StaffSchedule = new StaffSchedule();
  staffs: Staff[] = [];
  constructor(
    private staffScheduleService: StaffScheduleService
  ) { }


  ngOnInit() {
    this.getStaffSchedules();
  }

  private getStaffSchedules() {
    this.staffScheduleService.getAll().subscribe((res) => {
      console.log(res);
      this.staffSchedules = res ? res : [];
    });
  }

  private removeStaffSchedule(staffSchedule: StaffSchedule) {
    this.staffScheduleService.delete(staffSchedule._id).subscribe(() => {
      this.getStaffSchedules();
    });
  }
  private createStaffSchedule(staffScheduleForm: NgForm) {
    this.staffScheduleService.create(staffScheduleForm.value).subscribe((newStaffSchedule) => {
      this.staffSchedules.push(newStaffSchedule);
    });
  }


}
