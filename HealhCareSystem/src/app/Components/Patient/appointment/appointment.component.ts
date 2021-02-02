import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/Services/appointment.service';
import {Hospital} from '../../../Models/Hospital'
import {Appointment} from '../../../Models/Appointment'
import { Department } from 'src/app/Models/Department';
import { SlotAppointment } from 'src/app/Models/slotAppointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
   
  Hospital=new Hospital()
  problem:boolean=false;
  datepick:boolean=false
  slot=new SlotAppointment();
  Hospitals:Hospital[]=[];
  SlotArray:number[]=[];
  Appoint:Appointment=new Appointment();
  departments:boolean=false
  AllDepartments:Department[]=[];
  slotinput:boolean=false
  s1:boolean=true;
  s2:boolean=true;
  s3:boolean=true;
  s4:boolean=true;
  s5:boolean=true;
  s6:boolean=true;
  allfine:boolean=true;
  
  
  constructor(private router:Router, private appointment:AppointmentService) { }

  ngOnInit(): void {
    this.appointment.getHospital().subscribe(data=>{
     this.Hospitals=data;

    },error=>{})

  }

  department(Hospital_id:number)
  {
    this.departments=false
    if(!(isNaN(Hospital_id))){
      console.log(Hospital_id)
      this.departments=true;
      this.appointment.getDepartments(Hospital_id).subscribe(data=>{
        this.AllDepartments=data.departments
        console.log(this.AllDepartments)
      },err=>{
        console.log(err)
      })
      }
    }



    getSlot()
    {
      this.datepick=true
      this.slotinput=true
      this.slot.date=this.Appoint.appointment_date
      this.slot.id=this.Appoint.doc_id
      console.log(this.slot)
      this.appointment.getSlot(this.slot).subscribe(data=>{
        console.log("Hello")
        console.log(data)
        this.SlotArray=data;
        if(this.SlotArray.includes(1))
        {
          alert("hello")
          this.s1=false;
        }
        if(this.SlotArray.includes(2))
        {
          alert("hello")

          this.s2=false
        }
        if(this.SlotArray.includes(3))
        {
          alert("hello")

          this.s3=false
        }
        if(this.SlotArray.includes(4))
        {
          alert("hello")

          this.s4=false
        }
        if(this.SlotArray.includes(5))
        {
          alert("hello")

          this.s5=false
        }
        if(this.SlotArray.includes(6))
        {
          alert("hello")

          this.s6=false
        }
      },error=>{
        alert("error")

      })
    }

  
   getProblem()
   {
    this.problem=true
   }

   SaveAppointment()
   {
     console.log(JSON.stringify(this.Appoint))
     this.appointment.saveAppointment(this.Appoint).subscribe(data=>{
       console.log("Saved");
       console.log(JSON.stringify(data))
       alert("Appointmet Completed ")
       window.location.reload();
     },err=>{})
   }

}
