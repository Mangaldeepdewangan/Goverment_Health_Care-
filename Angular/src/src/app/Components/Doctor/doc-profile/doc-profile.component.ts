import { Component, OnInit } from '@angular/core';
import {DocServiceService} from '../../../Service/doc-service.service'
@Component({
  selector: 'app-doc-profile',
  templateUrl: './doc-profile.component.html',
  styleUrls: ['./doc-profile.component.css']
})
export class DocProfileComponent implements OnInit {

  doctorInfo:any=[]
  HospitalInfo:any=[]
  departments:any=[];
  did:number;
  constructor(private docser:DocServiceService) { }

  ngOnInit(): void 
  {
    this.docser.getDoctorInfo(localStorage.getItem("doc_id")).subscribe(res=>{
      this.doctorInfo=res.doc;
      this.did=this.doctorInfo.depart_id;
      this.HospitalInfo=res.hos;
      this.departments=res.hos.departments;
      console.log(this.doctorInfo);
      console.log(this.HospitalInfo)
      
    },err=>{})
    
  }

}
