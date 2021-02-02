import { Component, OnInit } from '@angular/core';
import { Patient } from '../../Models/Patient';
import {User} from '../../Models/User'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  PatientInfo:User=new User();
  ngOnInit(): void {
  }
  onSubmit()
  {

  }
 
  reset(loginForm)
  {
    
  }
}
