import { Component, OnInit } from '@angular/core';
import {HospitalService} from '../../../Service/hospital.service'
import Swal from 'sweetalert2'
import {Router} from '@angular/router'



@Component({
  selector: 'app-list-of-all-hospitals',
  templateUrl: './list-of-all-hospitals.component.html',
  styleUrls: ['./list-of-all-hospitals.component.css']
})
export class ListOfAllHospitalsComponent implements OnInit {

  constructor(private HospitalSer:HospitalService ,private Route:Router) { }
  AllHospital:any=[]
  AvgRating:number;
  ngOnInit(): void {
    this.HospitalSer.GetAllHospital().subscribe(res=>{
     this.AllHospital=res;
     console.log(this.AllHospital)
    },err=>{

    })
  }

  getRating(name:string, id:any) 
  {
     this.HospitalSer.getAvgHosRating(id).subscribe(res=>{
       this.AvgRating=res;
       Swal.fire({
        title: ' Avg Rating of '+name,
        html: '<b>'+this.AvgRating+'<img src="https://img.icons8.com/emoji/25/000000/star-emoji.png"/></b>',
        imageUrl: 'https://icon-library.net/images/review-icon-png/review-icon-png-23.jpg',
        imageWidth: 250,
        imageHeight: 250,
        imageAlt: 'User Image',
      })
     },err=>{})
    

  }

  getAllDoc(hos_id:any ,hospital_name:string)
  {
    

    localStorage.setItem("hos_id",JSON.stringify(hos_id))
    localStorage.setItem("hos_name",hospital_name)
    this.Route.navigate(['admin/AllDoc'])
    
    
    
  }

  getAllReview(id:any ,hospital_name:any)
  {
    alert("Hello")
    localStorage.setItem("AllHospitalId" , JSON.stringify(id));
    localStorage.setItem("AllHospitalName" , hospital_name);
    this.Route.navigate(['HosReview'])
  }

}
