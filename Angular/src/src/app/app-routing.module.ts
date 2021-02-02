import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/Patient/login/login.component';
import {DocLoginComponent } from './Components/Doctor/doc-login/doc-login.component'
import { RegisterComponent } from './Components/Patient/register/register.component';
import { PatProfileComponent } from './Components/Patient/pat-profile/pat-profile.component';
import { PreviousAppointmentComponent } from './Components/Patient/previous-appointment/previous-appointment.component';
import { DocProfileComponent } from './Components/Doctor/doc-profile/doc-profile.component';
import { UIComponent } from './Components/Doctor/ui/ui.component';
import { AppointmentComponent } from './Components/Patient/appointment/appointment.component';
import { DescriptionComponent } from './Components/Doctor/description/description.component';
import { PatFeedbackComponent } from './Components/Patient/pat-feedback/pat-feedback.component';
import { ViewAppointmentComponent } from './Components/Patient/view-appointment/view-appointment.component';
import { ListOfAllHospitalsComponent } from './Components/Admin/list-of-all-hospitals/list-of-all-hospitals.component';
import { AllDocComponent } from './Components/Admin/all-doc/all-doc.component';
import { CovideSecComponent } from './Components/covide-sec/covide-sec.component';
import { HosReviewComponent } from './Components/Admin/hos-review/hos-review.component';
import { DocReviewComponent } from './Components/Admin/doc-review/doc-review.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"patient/login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"Doctor/login",
    component:DocLoginComponent,
    pathMatch:"full"
  },
  {
    path:"patient/register",
    component:RegisterComponent,
    pathMatch:"full"
  },
  {
    path:"Doctor/profile",
    component:DocProfileComponent,
    pathMatch:"full"
  },
  {
    path:"Doctor/profile/AddDesc",
    component:DescriptionComponent,
    pathMatch:"full"
  },
  {
    path:"patient/profil",
    component:PatProfileComponent,
    pathMatch:"full"
  },
  {
    path:"Patient/prevAppointment",
    component:PreviousAppointmentComponent,
    pathMatch:"full"
  },
  {
    path:"patient/Appointment",
    component:AppointmentComponent,
    pathMatch:"full"
  },
  {
    path:"patient/listAppointment",
    component:ViewAppointmentComponent,
    pathMatch:"full"

  },
  {
    path:"patient/Appointment/Feedback",
    component:PatFeedbackComponent,
    pathMatch:"full"
  },
  {
    path:"Doctor/UI",
    component:UIComponent,
    pathMatch:"full"
  },
  {
    path:"admin/ListOfHospital",
    component:ListOfAllHospitalsComponent,
    pathMatch:"full"
  },
  {
    path:"admin/AllDoc",
    component:AllDocComponent,
    pathMatch:"full"
  },
  {
    path:"covide",
    component:CovideSecComponent,
    pathMatch:"full"
  },
  {
    path:"HosReview",
    component:HosReviewComponent,
    pathMatch:"full"
  },
  {
    path:"DocReview",
    component:DocReviewComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
