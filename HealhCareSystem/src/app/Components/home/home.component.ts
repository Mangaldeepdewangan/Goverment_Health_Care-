import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';
import {Home} from './../../Models/Home'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  Home:Home=new Home()
  msg:string=""

  constructor(private HomeService:HomeService) { }

  ngOnInit(): void {
    this.HomeService.getHome().subscribe(data=>{
      this.Home=data;
    },err=>{
      this.msg=err;
    })

  }

}
