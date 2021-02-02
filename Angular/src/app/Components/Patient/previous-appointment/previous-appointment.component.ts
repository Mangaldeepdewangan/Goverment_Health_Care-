import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/Service/patient.service';

@Component({
  selector: 'app-previous-appointment',
  templateUrl: './previous-appointment.component.html',
  styleUrls: ['./previous-appointment.component.css']
})
export class PreviousAppointmentComponent implements OnInit {

  constructor(private revAppoint:PatientService ,private router:Router) { }
   All_Appointments:any=[]
  ngOnInit(): void {
    this.revAppoint.ListofAppointment(1).subscribe(data=>{
      this.All_Appointments=data;
      console.log(this.All_Appointments)
    },err=>{})
  }

  getDoc(id:any)
  {
    localStorage.setItem("doc_id" ,id);
    this.router.navigate(['/Doctor/profile']);
    
  }

  viewDescription(doc_id)
  {
   localStorage.setItem("Appointmentid" ,"8");
   this.router.navigate(['/patient/listAppointment'])
  }

  fillFeed(a_id:any)
  {
    alert(a_id);
  }

}
