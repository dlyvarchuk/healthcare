import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UpdateUserComponent} from './components/update-user/update-user.component';
import {AllStaffsComponent} from './staff/profile/all-staffs/all-staffs.component';
import {UpdateStaffComponent} from './staff/profile/update-staff/update-staff.component';
import {AllPatientsComponent} from './patient/profile/all-patients/all-patients.component';
import {AllStaffScheduleComponent} from './staff/schedule/all-staff-schedule/all-staff-schedule.component';
import {AddStaffScheduleComponent} from './staff/schedule/add-staff-schedule/add-staff-schedule.component';
import {UpdateStaffScheduleComponent} from './staff/schedule/update-staff-schedule/update-staff-schedule.component';
import {UpdatePatientComponent} from './patient/profile/update-patient/update-patient.component';
import {AllStaffQueueComponent} from './staff/queue/all-staff-queue/all-staff-queue.component';
import {UpdateStaffQueueComponent} from './staff/queue/update-staff-queue/update-staff-queue.component';
import {AddPatientVisitQueueComponent} from './patient/queue/add-patient-visit-queue/add-patient-visit-queue.component';
import {AllPatientVisitQueueComponent} from './patient/queue/all-patient-visit-queue/all-patient-visit-queue.component';
import {UpdatePatientVisitQueueComponent} from './patient/queue/update-patient-visit-queue/update-patient-visit-queue.component';
import {AddPatientVisitComponent} from './patient/visit/add-patient-visit/add-patient-visit.component';
import {AllPatientVisitComponent} from './patient/visit/all-patient-visit/all-patient-visit.component';
import {UpdatePatientVisitComponent} from './patient/visit/update-patient-visit/update-patient-visit.component';
import {AllPatientDiagnosisComponent} from './patient/diagnosis/all-patient-diagnosis/all-patient-diagnosis.component';
import {UpdatePatientDiagnosisComponent} from './patient/diagnosis/update-patient-diagnosis/update-patient-diagnosis.component';
import {PatientPageComponent} from './patient/patient-page/patient-page.component';
import {StaffPageComponent} from './staff/staff-page/staff-page.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: AllUsersComponent},
  {path: 'staffs', component: AllStaffsComponent},
  {path: 'patients', component: AllPatientsComponent},
  {path: 'staff-queue', component: AllStaffQueueComponent},
  {path: 'single-user/:id', component: UpdateUserComponent},
  {path: 'single-staff/:id', component: UpdateStaffComponent},
  {path: 'staff-schedule', component: AllStaffScheduleComponent},
  {path: 'add-staff-schedule', component: AddStaffScheduleComponent},
  {path: 'single-staff-schedule/:id', component: UpdateStaffScheduleComponent},
  {path: 'single-patient/:id', component: UpdatePatientComponent},
  {path: 'single-staff-queue/:id', component: UpdateStaffQueueComponent},
  {path: 'add-patient-visit-queue', component: AddPatientVisitQueueComponent},
  {path: 'patient-visit-queue', component: AllPatientVisitQueueComponent},
  {path: 'single-patient-visit-queue/:id', component: UpdatePatientVisitQueueComponent},
  {path: 'add-patient-visit', component: AddPatientVisitComponent},
  {path: 'patient-visit', component: AllPatientVisitComponent},
  {path: 'single-patient-visit/:id', component: UpdatePatientVisitComponent},
  {path: 'patient-diagnosis', component: AllPatientDiagnosisComponent},
  {path: 'single-patient-diagnosis/:id', component: UpdatePatientDiagnosisComponent},
  {path: 'patient-page', component: PatientPageComponent},
  {path: 'staff-page', component: StaffPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
