import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import {User} from '../auth/user.model';
import {AuthData} from '../auth/auth-data.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();
  staffAuthChange = new Subject<boolean>();
  private host = 'http://localhost:3000';
  private user: User;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: authData.userId,
      isStaff: authData.isStaff
    };
    if (this.user.isStaff) {
      this.staffAuthSuccessfully();
    } else {
      this.authSuccessfully();
    }
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: authData.userId,
      isStaff: authData.isStaff
    };
    if (this.user.isStaff) {
      this.staffAuthSuccessfully();
    } else {
      this.authSuccessfully();
    }
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.staffAuthChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return {...this.user};
  }

  isAuth() {
    return this.user != null;
  }

  isAuthStaff() {
    return this.user != null && this.user.isStaff === true;
  }

  private authSuccessfully() {
    this.authChange.next(true);
    this.router.navigate(['/patient-page']);
  }

  private staffAuthSuccessfully() {
    this.staffAuthChange.next(true);
    this.router.navigate(['/staff-page']);
  }
}
