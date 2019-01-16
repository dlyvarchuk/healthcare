import {Component, Input, OnInit} from '@angular/core';
import {Staff} from '../../models/Staff';

@Component({
  selector: 'app-single-staff',
  templateUrl: './single-staff.component.html',
  styleUrls: ['./single-staff.component.css']
})
export class SingleStaffComponent implements OnInit {

  @Input() staffInput: Staff = new Staff();
  constructor() { }

  ngOnInit() {
  }

}
