import { Component, OnInit } from '@angular/core';
import {DocServiceService} from '../../../Service/doc-service.service'

@Component({
  selector: 'app-doc-review',
  templateUrl: './doc-review.component.html',
  styleUrls: ['./doc-review.component.css']
})
export class DocReviewComponent implements OnInit {
  
  DocName:string;
  AllDocReview:any=[]

  constructor(private doc:DocServiceService) { }

  ngOnInit(): void {
   this.DocName=localStorage.getItem("name")
   localStorage.getItem("doc_id")
   this.doc.getAllReview(localStorage.getItem("doc_id")).subscribe(res=>{
     this.AllDocReview=res;
     console.log(res);
   },err=>{})
  }

}
