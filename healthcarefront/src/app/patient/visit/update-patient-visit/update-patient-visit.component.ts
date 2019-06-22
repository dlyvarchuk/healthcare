import { Component, OnInit } from '@angular/core';
import {PatientVisit} from '../../../models/PatientVisit';
import {ActivatedRoute} from '@angular/router';
import {PatientVisitService} from '../../../services/patient-visit.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update-patient-visit',
  templateUrl: './update-patient-visit.component.html',
  styleUrls: ['./update-patient-visit.component.css']
})
export class UpdatePatientVisitComponent implements OnInit {

  patientVisit: PatientVisit = new PatientVisit();

  constructor(
    private activatedRoute: ActivatedRoute,
    private patientVisitService: PatientVisitService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.patientVisitService.getById(data._id).subscribe((newData) => {
        this.patientVisit = newData;
      });
    });
  }
  updatePatientVisit(updateForm: NgForm) {
    this.patientVisit = {...this.patientVisit, ...updateForm.value};
    this.patientVisitService.update(this.patientVisit._id, this.patientVisit).subscribe((res) => {
      this.patientVisit = res;
    });
  }

}
