import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Staff} from '../../../models/Staff';
import {StaffService} from '../../../services/staff.service';
import {User} from '../../../auth/user.model';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css']
})
export class UpdateStaffComponent implements OnInit {

  staff: Staff = new Staff();
  private user: User;

  constructor(
    private staffService: StaffService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.staffService.getById(this.user.userId).subscribe((newData) => {
      this.staff = newData;
    });
  }
  updateStaff(updateForm: NgForm) {
    this.staff = {...this.staff, ...updateForm.value};
    this.staffService.update(this.staff._id, this.staff).subscribe((res) => {
      this.staff = res;
    });
  }
}
