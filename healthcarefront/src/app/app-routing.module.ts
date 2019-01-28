import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UpdateUserComponent} from './components/update-user/update-user.component';
import {AllStaffsComponent} from './components/all-staffs/all-staffs.component';
import {UpdateStaffComponent} from './components/update-staff/update-staff.component';
import {AllPatientsComponent} from './components/all-patients/all-patients.component';
import {AllStaffScheduleComponent} from './components/all-staff-schedule/all-staff-schedule.component';
import {UpdateStaffScheduleComponent} from './components/update-staff-schedule/update-staff-schedule.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: AllUsersComponent},
  {path: 'staffs', component: AllStaffsComponent},
  {path: 'patients', component: AllPatientsComponent},
  {path: 'single-user/:id', component: UpdateUserComponent},
  {path: 'single-staff/:id', component: UpdateStaffComponent},
  {path: 'staffSchedule', component: AllStaffScheduleComponent},
  {path: 'single-staff-schedule/:id', component: UpdateStaffScheduleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
