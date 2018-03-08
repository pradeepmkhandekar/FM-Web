import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { PrivatecarService} from './privatecarservice.service';
import { VehicleMake} from '../vehiclemake';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {VehicleResponse} from '../VehicleResponse';
import {VehiRequest} from '../VehiRequest';
import { VehicleDetails } from '../VehicleDetails';


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
  datePickerConfig : Partial <BsDatepickerConfig>;

 vehiMake : string;

  public vehiMakelst:VehicleMake[];
  public vehicleResponse:VehicleResponse;
  public vehiRequest: VehiRequest;
  public vehidetailslst:VehicleDetails[];
  public vehiMakeCls :VehicleMake; 
  public VMakeLst =[];
  isMake:boolean=false;

  constructor(private PrivatecarService:PrivatecarService) { 
    this.datePickerConfig = Object.assign({},{
      containerClass : "theme-dark-blue",
      showWeekNumbers : false,
      dateInputFormat : "DD-MM-YYYY"
    });
  }

  ngOnInit() {
    this.getVehicleDetails();
    this.filteringMake();
  }

  public getVehicleDetails(){
    this.vehiRequest ={ProductId:1};
    this.PrivatecarService.GetVehMake(this.vehiRequest as VehiRequest)
    .subscribe(
      VehicleResponse => this.vehicleResponse=VehicleResponse
    );
  }

  public filteringMake(){
    if(this.vehicleResponse)
     { 
        this.vehidetailslst = this.vehicleResponse.MasterData;
        this.VMakeLst = [];
        for (var i = 0; i <= this.vehidetailslst.length-1; i++){

            if(this.VMakeLst.includes(this.vehidetailslst[i].Make_Name)==false)
            {
               this.VMakeLst.push(this.vehidetailslst[i].Make_Name);
            }
        }
     }
     else
     {
        this.getVehicleDetails();
        if(this.vehicleResponse)
        {
          this.vehidetailslst = this.vehicleResponse.MasterData;
          this.VMakeLst = [];
          for (var i = 0; i <= this.vehidetailslst.length-1; i++){

             if(this.VMakeLst.includes(this.vehidetailslst[i].Make_Name)==false)
             {
                this.VMakeLst.push(this.vehidetailslst[i].Make_Name);
             }
          }
        }
     }
  }
  
  search($event) {
    debugger;
    if(this.vehiMake!="")
    {
      this.VMakeLst=this.VMakeLst.filter(e=>e.startsWith(this.vehiMake));
      this.isMake=true;
      console.log(this.VMakeLst);
    }
    else
    {
      this.isMake=false;
    }
  }
  fnPassToVM(param){
  
  this.vehiMake=param;
  this.isMake=false;
  }

}
