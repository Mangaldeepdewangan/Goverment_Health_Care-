import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Patient} from '../Components/Models/Patient'
import { User } from '../Components/Models/User';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private Http:HttpClient) { }

  public RegisterUser(patient:Patient):Observable<any>
  {
    return this.Http.post("http://localhost:8080/Register",patient);
  }

  public LoginUser(user:User) :Observable<any>
  {
    return this.Http.post("http://localhost:8080/login",user);
  }

  public ListofAppointment(id:any):Observable<any>
  {
   return this.Http.get("http://localhost:8080/geAllslot/"+id); 
  }

  public getPatient(id):Observable<any>
  {
    return this.Http.get("http://localhost:8080//getPatient/"+id);
  }


}
