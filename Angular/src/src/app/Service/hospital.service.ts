import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private Http:HttpClient) { }

  public GetAllHospital():Observable<any>
  {
    return this.Http.get("http://localhost:8080/Hospitals");
  }

  public getAvgHosRating(id:any):Observable<any>
  {
    return this.Http.get("http://localhost:8080/getAvgHosRating/"+id);
  }

  public getHospitalReview(id:any):Observable<any>
  {
    return this.Http.get("http://localhost:8080/getHosFeedback/"+id)
  }
}
