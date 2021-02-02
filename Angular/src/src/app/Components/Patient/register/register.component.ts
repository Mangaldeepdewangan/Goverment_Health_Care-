import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Patient} from '../../Models/Patient'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  patient:Patient=new Patient();
  conpassword=""


  constructor() { }

  ngOnInit(): void {
  }
  onSubmit()
  {

  }

}
