import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatServiceService } from 'src/app/Services/pat-service.service';
import {Patient} from '../../../Models/Patient'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   patient:Patient=new Patient();
   msgsuc:string=""
   msg:string=""
   conpassword=""
  constructor(private Route:Router ,private PatientService:PatServiceService ) { }

  ngOnInit(): void {
  }
   
  onSubmit()
  {
     this.PatientService.RegisterUser(this.patient).subscribe(data=>{
       this.patient=data
       this.msgsuc="Registered succesfully"
       alert("Registered succesfully")
       window.location.reload();
     },error=>{
       console.log(error)
       this.msg=error.error;
       alert("User already Exist");
     })
  }

  reset(){}

}
