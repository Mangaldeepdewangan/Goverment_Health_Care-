import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Home} from '../Models/Home'

@Injectable({
  providedIn: 'root'
})
export class HomeService 
{
  URL="http://localhost:8080/Home"

  constructor(private http:HttpClient) { }

  getHome():Observable<any>
  {
   return this.http.get(this.URL)
  }
}
