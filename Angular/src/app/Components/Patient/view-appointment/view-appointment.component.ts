import { Component, OnInit } from '@angular/core';
import {AppointmentService} from '../../../Service/appointment.service'
import jspdf from 'jspdf'
import html2canvas from 'html2canvas'

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

  Description:any=[];
  Hospital:any=[];
  Doctor:any=[];
  Patient:any=[]
  Appointment:any=[];
  Departments:any=[];
  constructor(private AppointView:AppointmentService) { }

  ngOnInit(): void {
    this.AppointView.viewAppointments(8).subscribe(res=>{
     this.Appointment= res.appointment;
     this.Hospital=res.hos;
     this.Departments=res.hos.departments;
     this.Doctor=res.doctor;
     this.Patient=res.pat;
     this.Description=res.appointmentDescription;
     console.log(this.Appointment)
    },err=>{})
    
    
  }


  
  download()
  {
   var element=document.getElementById('table')
   
   html2canvas(element, {scrollY: -window.scrollY}).then((canvas)=>{
     console.log(canvas)

     var imgData=canvas.toDataURL('image/png');
     var doc=new jspdf();
     var imgHeight= canvas.height * 210/canvas.width;
     doc.addImage(imgData ,0,0,208,imgHeight);
     doc.save("image.pdf")
   })
  }


}
