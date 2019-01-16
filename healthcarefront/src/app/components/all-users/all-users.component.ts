import { Component, OnInit } from '@angular/core';
import {Users} from '../../models/Users';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: Users[] = [];
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.usersService.getAll().subscribe((res) => {
      this.users = res ? res : [];
    });
  }
  removeUser(user: Users) {
    this.usersService.delete(user._id).subscribe(() => {
      this.getUsers();
    });
  }
}
