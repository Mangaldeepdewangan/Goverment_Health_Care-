import { Component, OnInit } from '@angular/core';
import { DocServiceService } from 'src/app/Service/doc-service.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UIComponent implements OnInit {
  data:any;

  constructor(private doc:DocServiceService) { }

  ngOnInit(): void {
    this.doc.getTodayAppointment(1).subscribe(res=>{
      this.data=res;
      console.log(this.data);
    },err=>{})

  }

  viewPatient(id:any)
  {
    
  }

}
