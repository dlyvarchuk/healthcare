import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Patient} from '../../../models/Patient';
import {PatientService} from '../../../services/patient.service';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../auth/user.model';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  patient: Patient = new Patient();;
  maxDate;
  private user: User;

  constructor(
    private patientService: PatientService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.patientService.getById(this.user.userId).subscribe((newData) => {
      this.patient = newData;
    });
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }
  updatePatient(updateForm: NgForm) {
    this.patient = {...this.patient, ...updateForm.value};
    this.patientService.update(this.patient._id, this.patient).subscribe((res) => {
      this.patient = res;
    });
  }
}

