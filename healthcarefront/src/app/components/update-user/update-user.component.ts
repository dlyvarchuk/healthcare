import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Users} from '../../models/Users';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: Users;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data) => {
     this.usersService.getById(data._id).subscribe((newData) => {
        this.user = newData;
       });
    });
  }

  updateUser(updateForm: NgForm) {
    this.user = {...this.user, ...updateForm.value};
    this.usersService.update(this.user._id, this.user).subscribe((res) => {
      this.user = res;
    });
  }

}
