import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { PrivatecarService} from './privatecarservice.service';
import { VehicleMake} from '../vehiclemake';

@Component({
  selector: 'app-privatecar',
  templateUrl: './privatecar.component.html',
  styleUrls: ['./privatecar.component.css',
  '../login/bootstrap.min.css',
  '../login/font-awesome.min.css',
  '../login/fonts.css',
  '../login/style-finmart.css',
  '../login/responsive-finmart.css',
  './jquery.mCustomScrollbar.css']
})
export class PrivatecarComponent implements OnInit {

  public vehiMakelst:VehicleMake[];
  constructor(private PrivatecarService:PrivatecarService) { 

  }

  ngOnInit() {
   
  }

  search($event) {
    debugger;
    let q = ""; //$event.key;
    this.vehiMakelst=this.PrivatecarService.vehiMakeAuto(q);
   console.log(this.vehiMakelst);
}
  

}
