import { Component, OnInit } from '@angular/core';
import {Staff} from '../../../models/Staff';
import {StaffSchedule} from '../../../models/StaffSchedule';
import {StaffScheduleService} from '../../../services/staff-schedule.service';
import {NgForm} from '@angular/forms';
import {StaffService} from '../../../services/staff.service';
import {User} from '../../../auth/user.model';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-add-staff-schedule',
  templateUrl: './add-staff-schedule.component.html',
  styleUrls: ['./add-staff-schedule.component.css']
})
export class AddStaffScheduleComponent implements OnInit {

  staffSchedules: StaffSchedule[] = [];
  staffSchedule: StaffSchedule = new StaffSchedule();
  staffs: Staff[] = [];
  private user: User;
  constructor(
    private authService: AuthService,
    private staffScheduleService: StaffScheduleService,
    private staffsService: StaffService
  ) { }


  ngOnInit() {
    this.user = this.authService.getUser();
    this.getStaffs();
    this.getStaffSchedules();
  }

  isAdminStaff() {
    return this.user != null && this.user.isStaff === true && this.user.email === 'admin@gmail.com' ;
  }

  private getStaffs() {
    this.staffsService.getAll().subscribe((res) => {
      this.staffs = res ? res : [];
    });
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
