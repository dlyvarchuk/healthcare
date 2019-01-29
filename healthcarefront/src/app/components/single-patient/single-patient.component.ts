import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../../models/Patient';

@Component({
  selector: 'app-single-patient',
  templateUrl: './single-patient.component.html',
  styleUrls: ['./single-patient.component.css']
})
export class SinglePatientComponent implements OnInit {

  @Input() patientInput: Patient = new Patient();
  constructor() { }

  ngOnInit() {
  }

}


