import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../Models/Appointment';
import {SlotAppointment} from '../Models/slotAppointment'

@Injectable({
  providedIn: 'root'
})


export class AppointmentService {
private Sloturl:string="http://localhost:8080/user/Appointment/getSlot";
private Hospital:string="http://localhost:8080/Hospitals"
private Departments:string="http://localhost:8080/Hospital/"
private Slots="http://localhost:8080/user/Appointment/getSlot"
private AppointmentSave="http://localhost:8080/user/Appointment"



  constructor(private Http:HttpClient) { }

  public getHospital():Observable<any>
  {
    return this.Http.get(this.Hospital);
  }

  public getSlot(slotAppointment:SlotAppointment):Observable<any>
  {
    return this.Http.post(this.Sloturl,slotAppointment);
  }

  public getDepartments(HosId:number):Observable<any>
  {
    return this.Http.get(this.Departments+HosId)
  }

  public saveAppointment(Appo:Appointment):Observable<any>
  {
    return this.Http.post(this.AppointmentSave ,Appo);
  }



}
