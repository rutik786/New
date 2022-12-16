import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  FirstName: any;
  LastName: any;
  Email: any;
  Phone: any;
  Password:any; 
  Repassword:any;
  
    constructor (public _info:InfoService,
      public route:Router) {}
    ngOnInit(): void { }
  
    submit(data:object):void{
  this._info.userSignup(data).subscribe((result)=>{
  console.warn(result)
  if(result){
    this.route.navigate(['/view']);

  }
  }); 
    }
  
    // send(){
    //   this.submit(NgForm);
    //   this.add_data();
    //   this.route.navigate(['/view'])
    // }
    // add_data() {
    //   var admin = {
    //     fName: this.FirstName,
    //     Lname: this.LastName,
    //     email:this.Email,
    //     Number:this.Phone,
    //     password:this.Password,

    //   };
    //   this._info.jobs.push(admin);
    //       console.log(this._info)
    // }
    
  
  }
  