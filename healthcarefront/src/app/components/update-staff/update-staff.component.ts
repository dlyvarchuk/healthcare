import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Staff} from '../../models/Staff';
import {StaffService} from '../../services/staff.service';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css']
})
export class UpdateStaffComponent implements OnInit {

  staff: Staff = new Staff();

  constructor(
    private activatedRoute: ActivatedRoute,
    private staffService: StaffService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.staffService.getById(data._id).subscribe((newData) => {
        this.staff = newData;
      });
    });
  }
  updateStaff(updateForm: NgForm) {
    this.staff = {...this.staff, ...updateForm.value};
    this.staffService.update(this.staff._id, this.staff).subscribe((res) => {
      this.staff = res;
    });
  }
}
