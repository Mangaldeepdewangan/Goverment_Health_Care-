import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms'
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeService } from './Services/home.service';
import { FooterComponent } from './footer/footer.component';
import { HospitalComponent } from './Components/hospital/hospital.component';
import { LoginComponent } from './Components/Patient/login/login.component';
import { RegisterComponent } from './Components/Patient/register/register.component';
import { AppointmentComponent } from './Components/Patient/appointment/appointment.component';
import { AppointmentsComponent } from './Components/Patient/appointments/appointments.component';
import { DescriptionComponent } from './Components/Patient/description/description.component';
import { DocloginComponent } from './Components/Doctor/doclogin/doclogin.component';
import { AddDescriptionComponent } from './Components/Doctor/add-description/add-description.component';
import { PatientProComponent } from './Components/Doctor/patient-pro/patient-pro.component';
import {ConfirmEqualValidatorDirective} from '../app/Components/Validator/confirmValidator';
import { DoctorUIComponent } from './Components/Doctor/doctor-ui/doctor-ui.component';
import { PatientprofilrComponent } from './Components/Patient/patientprofilr/patientprofilr.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HospitalComponent,
    LoginComponent,
    RegisterComponent,
    AppointmentComponent,
    AppointmentsComponent,
    DescriptionComponent,
    DocloginComponent,
    AddDescriptionComponent,
    PatientProComponent,
    ConfirmEqualValidatorDirective,
    DoctorUIComponent,
    PatientprofilrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    
    
  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
