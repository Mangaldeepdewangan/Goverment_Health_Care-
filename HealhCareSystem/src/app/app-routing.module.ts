import { componentFactoryName } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDescriptionComponent } from './Components/Doctor/add-description/add-description.component';
import { DoctorUIComponent } from './Components/Doctor/doctor-ui/doctor-ui.component';
import { HomeComponent } from './Components/home/home.component';
import { HospitalComponent } from './Components/hospital/hospital.component';
import { AppointmentComponent } from './Components/Patient/appointment/appointment.component';
import { AppointmentsComponent } from './Components/Patient/appointments/appointments.component';
import { LoginComponent } from './Components/Patient/login/login.component';
import { PatientprofilrComponent } from './Components/Patient/patientprofilr/patientprofilr.component';
import { RegisterComponent } from './Components/Patient/register/register.component';
import { Appointment } from './Models/Appointment';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"

  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"

  },
  {
    path:"hospital",
    component:HospitalComponent,
    pathMatch:"full"
  },
  {
    path:"register",
    component:RegisterComponent,
    pathMatch:"full"
  }
  ,
  {
    path:"patient/appointment",
    component:AppointmentComponent,
    pathMatch:"full"
  }
  ,
  {
    path:"patient",
    component:PatientprofilrComponent,
    pathMatch:"full"

  }
  ,
  {
    path:"patient/Appointment",
    component:AppointmentsComponent,
    pathMatch:"full"
  },
  {
    path:"patient/AddDesc",
    component:AddDescriptionComponent,
    pathMatch:"full"
  },
  {
    path:"Doctor/profile",
    component:DoctorUIComponent,
    pathMatch:"full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
