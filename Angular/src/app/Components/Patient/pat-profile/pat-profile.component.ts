import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/Service/patient.service';

@Component({
  selector: 'app-pat-profile',
  templateUrl: './pat-profile.component.html',
  styleUrls: ['./pat-profile.component.css']
})
export class PatProfileComponent implements OnInit {

  constructor(private patSer:PatientService) { }

  Patient:any=[]
  ngOnInit(): void {
    this.patSer.getPatient(1).subscribe(data=>{
    this.Patient=data;
    console.log(this.Patient)
    },err=>{})
  }

  prevAppointment(id:any)
  {
   alert(id); 
  }

}
