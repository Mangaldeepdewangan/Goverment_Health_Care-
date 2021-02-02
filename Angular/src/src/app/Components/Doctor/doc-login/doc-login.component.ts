import { Component, OnInit } from '@angular/core';
import {User} from '../../Models/User'


@Component({
  selector: 'app-doc-login',
  templateUrl: './doc-login.component.html',
  styleUrls: ['./doc-login.component.css']
})
export class DocLoginComponent implements OnInit {

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
