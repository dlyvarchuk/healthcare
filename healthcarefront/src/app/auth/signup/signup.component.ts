import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Users} from '../../models/Users';
import {Patient} from '../../models/Patient';
import {PatientService} from '../../services/patient.service';
import {UsersService} from '../../services/users.service';
import {Staff} from '../../models/Staff';
import {StaffService} from '../../services/staff.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  users: Users[] = [];
  patients: Patient[] = [];
  staffs: Staff[] = [];
  user: Users = new Users();
  patient: Patient = new Patient();
  staff: Staff = new Staff();
  currentDate;

  constructor(
    private authService: AuthService,
    private patientsService: PatientService,
    private staffService: StaffService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.currentDate = new Date();
  }

  private onSubmit (form: NgForm) {
    this.usersService.create(form.value).subscribe((newUser) => {
      this.users.push(newUser);
      this.authService.registerUser({
        userId: newUser._id,
        email: newUser.login_name,
        password: newUser.Password,
        isStaff: form.value.is_staff
    });
      if (form.value.is_staff === true) {
        this.createStaff(newUser);
      } else {
        this.createPatient(newUser);
      }
    });
  }

  private createPatient(user: Users) {
    this.patient._id = user._id;
    this.patient.patient_id = user._id;
    this.patient.first_name = user.login_name;
    this.patientsService.create(this.patient).subscribe((newPatient) => {
      this.patients.push(newPatient);
    });
  }

  private createStaff(user: Users) {
    this.staff._id = user._id;
    this.staff.staff_id = user._id;
    this.staff.email = user.login_name;
    this.staff.full_name = user.login_name;
    this.staffService.create(this.staff).subscribe((newStaff) => {
      this.staffs.push(newStaff);
    });
  }

}
