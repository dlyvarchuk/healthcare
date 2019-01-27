import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UpdateUserComponent} from './components/update-user/update-user.component';
import {AllStaffsComponent} from './components/all-staffs/all-staffs.component';
import {UpdateStaffComponent} from './components/update-staff/update-staff.component';
import {AllPatientsComponent} from './components/all-patients/all-patients.component';
import {UpdatePatientComponent} from './components/update-patient/update-patient.component';
import {AllStaffQueueComponent} from './components/all-staff-queue/all-staff-queue.component';
import {UpdateStaffQueueComponent} from './components/update-staff-queue/update-staff-queue.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: AllUsersComponent},
  {path: 'staffs', component: AllStaffsComponent},
  {path: 'patients', component: AllPatientsComponent},
  {path: 'staff_queue', component: AllStaffQueueComponent},
  {path: 'single-user/:id', component: UpdateUserComponent},
  {path: 'single-staff/:id', component: UpdateStaffComponent},
  {path: 'single-patient/:id', component: UpdatePatientComponent},
  {path: 'single-staff-queue/:id', component: UpdateStaffQueueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
