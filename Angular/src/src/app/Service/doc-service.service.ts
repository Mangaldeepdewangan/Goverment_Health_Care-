import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Components/Models/User';

@Injectable({
  providedIn: 'root'
})
export class DocServiceService {

  constructor(private Http:HttpClient) { }

  SaveDescription(desc:any):Observable<any>
  {
    return this.Http.post("http://localhost:8080/AddDescription" ,desc);
  }
  
  getTodayAppointment(id:any):Observable<any>
  {
    return this.Http.get("http://localhost:8080/getTodayAppointment/"+id);
  }

  getDoctorInfo(id:any):Observable<any>
  {
    return this.Http.get("http://localhost:8080/DoctorInfo/"+id);
  }

  getAllDoc(id:any):Observable<any>
  {
    return this.Http.get("http://localhost:8080/Doctors/"+id);
  }

  getAllReview(id:any):Observable<any>
  {
    return this.Http.get("http://localhost:8080/getDocFeedback/"+id)
  }

}
