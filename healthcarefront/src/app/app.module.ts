import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AllStaffsComponent } from './staff/profile/all-staffs/all-staffs.component';
import { SingleStaffComponent } from './staff/profile/single-staff/single-staff.component';
import { UpdateStaffComponent } from './staff/profile/update-staff/update-staff.component';
import { AllPatientsComponent } from './patient/profile/all-patients/all-patients.component';
import { AddStaffScheduleComponent } from './staff/schedule/add-staff-schedule/add-staff-schedule.component';
import { AllStaffScheduleComponent } from './staff/schedule/all-staff-schedule/all-staff-schedule.component';
import { SingleStaffScheduleComponent } from './staff/schedule/single-staff-schedule/single-staff-schedule.component';
import { UpdateStaffScheduleComponent } from './staff/schedule/update-staff-schedule/update-staff-schedule.component';
import { AllStaffQueueComponent } from './staff/queue/all-staff-queue/all-staff-queue.component';
import { SingleStaffQueueComponent } from './staff/queue/single-staff-queue/single-staff-queue.component';
import { UpdateStaffQueueComponent } from './staff/queue/update-staff-queue/update-staff-queue.component';
import { SinglePatientComponent } from './patient/profile/single-patient/single-patient.component';
import { UpdatePatientComponent } from './patient/profile/update-patient/update-patient.component';
import { AllPatientVisitQueueComponent } from './patient/queue/all-patient-visit-queue/all-patient-visit-queue.component';
import { AddPatientVisitQueueComponent } from './patient/queue/add-patient-visit-queue/add-patient-visit-queue.component';
import { PatientQueueNumberComponent } from './patient/queue/patient-queue-number.component';
import { SinglePatientVisitQueueComponent } from './patient/queue/single-patient-visit-queue/single-patient-visit-queue.component';
import { UpdatePatientVisitQueueComponent } from './patient/queue/update-patient-visit-queue/update-patient-visit-queue.component';
import { AddPatientVisitComponent } from './patient/visit/add-patient-visit/add-patient-visit.component';
import { AllPatientVisitComponent } from './patient/visit/all-patient-visit/all-patient-visit.component';
import { SinglePatientVisitComponent } from './patient/visit/single-patient-visit/single-patient-visit.component';
import { UpdatePatientVisitComponent } from './patient/visit/update-patient-visit/update-patient-visit.component';
import { AllPatientDiagnosisComponent } from './patient/diagnosis/all-patient-diagnosis/all-patient-diagnosis.component';
import { SinglePatientDiagnosisComponent } from './patient/diagnosis/single-patient-diagnosis/single-patient-diagnosis.component';
import { UpdatePatientDiagnosisComponent } from './patient/diagnosis/update-patient-diagnosis/update-patient-diagnosis.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { PatientPageComponent } from './patient/patient-page/patient-page.component';
import { StaffPageComponent } from './staff/staff-page/staff-page.component';
import { AuthService } from './services/auth.service';

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
    AddStaffScheduleComponent,
    AllStaffScheduleComponent,
    SingleStaffScheduleComponent,
    UpdateStaffScheduleComponent,
    AllPatientsComponent,
    SinglePatientComponent,
    UpdatePatientComponent,
    AllStaffQueueComponent,
    SingleStaffQueueComponent,
    UpdateStaffQueueComponent,
    AddPatientVisitQueueComponent,
    AllPatientVisitQueueComponent,
    PatientQueueNumberComponent,
    SinglePatientVisitQueueComponent,
    UpdatePatientVisitQueueComponent,
    AddPatientVisitComponent,
    AllPatientVisitComponent,
    SinglePatientVisitComponent,
    UpdatePatientVisitComponent,
    AllPatientDiagnosisComponent,
    SinglePatientDiagnosisComponent,
    UpdatePatientDiagnosisComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    SidenavListComponent,
    PatientPageComponent,
    StaffPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [PatientQueueNumberComponent]
})
export class AppModule { }
