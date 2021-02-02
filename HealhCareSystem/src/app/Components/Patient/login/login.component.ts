import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Models/Patient';
import { User } from 'src/app/Models/User';
import { PatServiceService } from 'src/app/Services/pat-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User=new User();
  patient:Patient=new Patient();
  error:string=""
  constructor(private router:Router , private patientService:PatServiceService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.patientService.LoginUser(this.user).subscribe(data=>{
         this.patient=data;
         this.error=""
         console.log(this.patient)
         this.router.navigate(['patient/appointment'])
    },error=>{
      this.error="User Does not exist";
    })
  }
  reset()
  {
  }

}
