import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Patient} from '../Models/Patient'
import { User } from '../Models/User';
@Injectable({
  providedIn: 'root'
})
export class DocDerviceService {

  constructor(private Http:HttpClient) { }

  GetAppointments():Observable<any>
  {
    return null;
  }
  SaveDescription(desc:any):Observable<any>
  {
    return this.Http.post("http://localhost:8080/AddDescription" ,desc);
  }
}
