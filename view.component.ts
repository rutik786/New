import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit{
  experience:any;
  added:any;
  constructor (public _info:InfoService) {}
  ngOnInit(): void { 
    this._info.sendData().subscribe((result)=>{
      console.warn(result)
      this.added=result;
      }); 
    // this.experience = this._info.jobs;

   }

}
