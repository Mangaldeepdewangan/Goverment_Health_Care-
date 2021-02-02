import { Component, OnInit } from '@angular/core';
import {PatServiceService} from '../../../Services/pat-service.service'
import {Appointment} from '../../../Models/Appointment'

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  constructor(private patient:PatServiceService) { }

  Appointments:any=[]

  ngOnInit(): void 
  {
    this.patient.ListofAppointment(1).subscribe(Res=>{
      this.Appointments=Res;
      console.log(this.Appointments)
    },
      err=>{})
  }

}
