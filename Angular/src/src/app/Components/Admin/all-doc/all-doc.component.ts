import { Component, OnInit } from '@angular/core';
import {DocServiceService} from '../../../Service/doc-service.service'
import {Router} from '@angular/router'
import Swal from 'sweetalert2'


@Component({
  selector: 'app-all-doc',
  templateUrl: './all-doc.component.html',
  styleUrls: ['./all-doc.component.css']
})
export class AllDocComponent implements OnInit {
  hosId:String;
  hosName:string;
  AllDoc:any=[];

  constructor(private docser:DocServiceService ,private Route:Router) { }

  ngOnInit(): void {
    this.hosId=localStorage.getItem("hos_id")
    this.hosName=localStorage.getItem("hos_name")
    this.docser.getAllDoc(this.hosId).subscribe(res=>{
      this.AllDoc=res;
      console.log(this.AllDoc);
    },err=>{})




  }

  getAllDoc(id)
  {
   localStorage.setItem("doc_id" ,JSON.stringify(id));
   this.Route.navigate(['Doctor/profile'])
  }

  
  getRating(fname:string ,lname:string)
  {
    Swal.fire({
      title: ' Avg Rating of '+fname+' '+lname,
      html: '<b>Description</b>',
      imageUrl: 'https://icon-library.net/images/review-icon-png/review-icon-png-23.jpg',
      imageWidth: 250,
      imageHeight: 250,
      imageAlt: 'User Image',
    })

  }

  getReview(doc_id ,fname:string ,lname:string)
  {
    localStorage.setItem("doc_id" ,JSON.stringify(doc_id))
    localStorage.setItem("name" ,fname+" "+lname)
    this.Route.navigate(['DocReview'])
  }


}
