import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import {FormsModule} from '@angular/forms';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AllStaffsComponent } from './components/all-staffs/all-staffs.component';
import { SingleStaffComponent } from './components/single-staff/single-staff.component';
import { UpdateStaffComponent } from './components/update-staff/update-staff.component';
import { AllPatientsComponent } from './components/all-patients/all-patients.component';
import { AllStaffScheduleComponent } from './components/all-staff-schedule/all-staff-schedule.component';
import { SingleStaffScheduleComponent } from './components/single-staff-schedule/single-staff-schedule.component';
import { UpdateStaffScheduleComponent } from './components/update-staff-schedule/update-staff-schedule.component';
import { AllStaffQueueComponent } from './components/all-staff-queue/all-staff-queue.component';
import { SingleStaffQueueComponent } from './components/single-staff-queue/single-staff-queue.component';
import { UpdateStaffQueueComponent } from './components/update-staff-queue/update-staff-queue.component';
import {SinglePatientComponent} from './components/single-patient/single-patient.component';
import {UpdatePatientComponent} from './components/update-patient/update-patient.component';
import { AllPatientVisitQueueComponent } from './components/all-patient-visit-queue/all-patient-visit-queue.component';
import { SinglePatientVisitQueueComponent } from './components/single-patient-visit-queue/single-patient-visit-queue.component';
import { UpdatePatientVisitQueueComponent } from './components/update-patient-visit-queue/update-patient-visit-queue.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllUsersComponent,
    SingleUserComponent,
    UpdateUserComponent,
    AllStaffsComponent,
    SingleStaffComponent,
    UpdateStaffComponent,
    AllStaffScheduleComponent,
    SingleStaffScheduleComponent,
    UpdateStaffScheduleComponent,
    AllPatientsComponent,
    SinglePatientComponent,
    UpdatePatientComponent,
    AllStaffQueueComponent,
    SingleStaffQueueComponent,
    UpdateStaffQueueComponent,
    AllPatientVisitQueueComponent,
    SinglePatientVisitQueueComponent,
    UpdatePatientVisitQueueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
