import { Component, OnInit } from '@angular/core';
import {HospitalService} from '../../../Service/hospital.service'

@Component({
  selector: 'app-hos-review',
  templateUrl: './hos-review.component.html',
  styleUrls: ['./hos-review.component.css']
})
export class HosReviewComponent implements OnInit {
  HosName:String;
  AllReview:any=[];
  constructor(private HosSer:HospitalService) { }

  ngOnInit(): void {
    this.HosName=localStorage.getItem("hos_name")
    this.HosSer.getHospitalReview(localStorage.getItem("hos_id")).subscribe(res=>{
      this.AllReview=res;
    } ,err=>{})
  }

}
