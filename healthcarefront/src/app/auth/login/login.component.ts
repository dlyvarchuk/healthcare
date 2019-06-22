import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {NgForm} from '@angular/forms';
import {UsersService} from '../../services/users.service';
import {Users} from '../../models/Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Users = new Users();
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
  }

  private onSubmit (form: NgForm) {
    this.usersService.getByLoginName(form.value.email).subscribe((newData) => {
      this.user = newData;
    });
    this.authService.login({
      userId: this.user._id,
      email: form.value.email,
      password: form.value.password,
      isStaff: form.value.is_staff
    });
  }
}
