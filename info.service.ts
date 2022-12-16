import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(public _http:HttpClient) { }
  userSignup(data:any){
    return this._http.post('http://localhost:3000/Student',data )
  }
  sendData(){
    return this._http.get<[]>('http://localhost:3000/Student' )
  }
  // public jobs: any = [];

}
