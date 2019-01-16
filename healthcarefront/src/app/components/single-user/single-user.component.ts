import {Component, Input, OnInit} from '@angular/core';
import {Users} from '../../models/Users';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  @Input() usersInput: Users = new Users();
  constructor() { }

  ngOnInit() {
  }

}
