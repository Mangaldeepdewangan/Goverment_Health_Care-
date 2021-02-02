import { Component, OnInit } from '@angular/core';
import {SlotAppointment} from '../../Models/SlotAppointment'
import {Hospital} from '../../Models/Hospital'
import {Department} from '../../Models/Department'
import {Appointment} from '../../Models/Appointment'
import {AppointmentService} from '../../../Service/appointment.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
 


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private router:Router, private appointment:AppointmentService ) {
   }

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
  minDate:Date;
  maxDate:Date;

  ngOnInit(): void {
    this.appointment.getHospital().subscribe(data=>{
      this.Hospitals=data;
 
     },error=>{})

     this.minDate = new Date();
     this.maxDate = new Date();
     this.minDate.setDate(this.minDate.getDate()-1);

     this.maxDate.setDate(this.maxDate.getDate() + 1);
 
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
          this.s1=false;
        }
        if(this.SlotArray.includes(2))
        {

          this.s2=false
        }
        if(this.SlotArray.includes(3))
        {

          this.s3=false
        }
        if(this.SlotArray.includes(4))
        {

          this.s4=false
        }
        if(this.SlotArray.includes(5))
        {

          this.s5=false
        }
        if(this.SlotArray.includes(6))
        {

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
       Swal.fire({
        icon: 'success',
        title: 'Booked',
        text: 'your appointment has been booked ',
      })
      this.router.navigate(['/patient/profil'])
     },err=>{})
   }


}
