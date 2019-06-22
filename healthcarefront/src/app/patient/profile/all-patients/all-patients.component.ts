import { Component, OnInit } from '@angular/core';
import {Patient} from '../../../models/Patient';
import {Users} from '../../../models/Users';
import {PatientService} from '../../../services/patient.service';
import {UsersService} from '../../../services/users.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})
export class AllPatientsComponent implements OnInit {

  users: Users[] = [];
  patients: Patient[] = [];
  patient: Patient = new Patient();
  user: Users = new Users();

  constructor(
    private patientsService: PatientService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.getPatients();
  }
  private getPatients() {
    this.patientsService.getAll().subscribe((res) => {
      this.patients = res ? res : [];
    });
  }

  private removePatient(patient: Patient) {
    this.patientsService.delete(patient._id).subscribe(() => {
      this.getPatients();
    });
  }
  private createUser(patientUsersForm: NgForm) {
    this.usersService.create(patientUsersForm.value).subscribe((newUser) => {
      this.users.push(newUser);
      this.createPatient(newUser);
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
}
