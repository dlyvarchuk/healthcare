import { Component, OnInit } from '@angular/core';
import {Staff} from '../../models/Staff';
import {StaffService} from '../../services/staff.service';
import {NgForm} from '@angular/forms';
import {UsersService} from '../../services/users.service';
import {Users} from '../../models/Users';

@Component({
  selector: 'app-all-staffs',
  templateUrl: './all-staffs.component.html',
  styleUrls: ['./all-staffs.component.css']
})
export class AllStaffsComponent implements OnInit {

  users: Users[] = [];
  staffs: Staff[] = [];
  staff: Staff = new Staff();;
  user: Users = new Users();

  constructor(
    private staffsService: StaffService,
    private usersService: UsersService
) { }

  ngOnInit() {
    this.getStaffs();
  }

  private getStaffs() {
    this.staffsService.getAll().subscribe((res) => {
      this.staffs = res ? res : [];
    });
  }

  private removeStaff(staff: Staff) {
    this.staffsService.delete(staff._id).subscribe(() => {
      this.getStaffs();
    });
  }
  private createUser(usersForm: NgForm) {
    this.usersService.create(usersForm.value).subscribe((newUser) => {
      this.users.push(newUser);
      this.createStaff(newUser);
    });
  }

  private createStaff(user: Users) {
    this.staff._id = user._id;
    this.staff.staff_id = user._id;
    this.staff.full_name = user.login_name;
    this.staffsService.create(this.staff).subscribe((newStaff) => {
      this.staffs.push(newStaff);
    });
  }

}
