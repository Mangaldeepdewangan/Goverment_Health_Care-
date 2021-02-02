import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AppointmentComponent } from './Components/Patient/appointment/appointment.component';
import { PreviousAppointmentComponent } from './Components/Patient/previous-appointment/previous-appointment.component';
import { UIComponent } from './Components/Doctor/ui/ui.component';
import { RegisterComponent } from './Components/Patient/register/register.component';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { DocLoginComponent } from './Components/Doctor/doc-login/doc-login.component';
import { PatProfileComponent } from './Components/Patient/pat-profile/pat-profile.component';
import { DocProfileComponent } from './Components/Doctor/doc-profile/doc-profile.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './Components/Patient/login/login.component';
import { ConfirmEqualValidatorDirective } from './Components/Patient/validators/validators';
import { DescriptionComponent } from './Components/Doctor/description/description.component';
import { PatFeedbackComponent } from './Components/Patient/pat-feedback/pat-feedback.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateWiseAppointmentsComponent } from './Components/Admin/date-wise-appointments/date-wise-appointments.component';
import { HosRatingComponent } from './Components/Admin/hos-rating/hos-rating.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CovideSecComponent } from './Components/covide-sec/covide-sec.component';
import { ViewAppointmentComponent } from './Components/Patient/view-appointment/view-appointment.component';
import { ListOfAllHospitalsComponent } from './Components/Admin/list-of-all-hospitals/list-of-all-hospitals.component';
import { AllDocComponent } from './Components/Admin/all-doc/all-doc.component';
import { DocReviewComponent } from './Components/Admin/doc-review/doc-review.component';
import { HosReviewComponent } from './Components/Admin/hos-review/hos-review.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AppointmentComponent,
    PreviousAppointmentComponent,
    UIComponent,
    RegisterComponent,
    HomeComponent,
    DocLoginComponent,
    PatProfileComponent,
    DocProfileComponent,
    LoginComponent,
    ConfirmEqualValidatorDirective,
    DescriptionComponent,
    PatFeedbackComponent,
    DateWiseAppointmentsComponent,
    HosRatingComponent,
    CovideSecComponent,
    ViewAppointmentComponent,
    ListOfAllHospitalsComponent,
    AllDocComponent,
    DocReviewComponent,
    HosReviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterTestingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
