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
   
  }
  
  search($event) {
    let q =$event.key;
    //this.vehiMakelst=this.PrivatecarService.vehiMakeAuto(q);
    this.vehiRequest ={ProductId:1};
    this.PrivatecarService.GetVehMake(this.vehiRequest as VehiRequest)
    .subscribe(
      VehicleResponse => this.vehicleResponse=VehicleResponse
    );
    //console.log(this.vehicleResponse);

   if(this.vehicleResponse)
     { 
        this.vehidetailslst = this.vehicleResponse.MasterData;
        console.log(this.vehidetailslst);
        // this.vehiMakelst=this.vehidetailslst.concat();
        
        this.vehiMakelst = [];
        for (var i = 0; i <= this.vehidetailslst.length-1; i++){
            if (this.vehiMake != this.vehidetailslst[i].Make_Name){
              this.vehiMake = this.vehidetailslst[i].Make_Name;
              this.vehiMakeCls = new VehicleMake();
              this.vehiMakeCls.Make_Name = this.vehiMake;
              this.vehiMakelst.push(this.vehiMakeCls);
            }
        }
        console.log(this.vehiMakelst);
        this.vehiMake = "";
        this.VMakeLst = [];
        for (var i = 0; i <= this.vehiMakelst.length-1; i++){

            if(this.VMakeLst.includes(this.vehiMakelst[i].Make_Name)==false)
            {
               this.VMakeLst.push(this.vehiMakelst[i].Make_Name);
            }
            
            // if (this.vehiMake != this.vehiMakelst[i].Make_Name){
            //   this.vehiMake = this.vehiMakelst[i].Make_Name;
            //   this.vehiMakeCls = new VehicleMake();
            //   this.vehiMakeCls.Make_Name = this.vehiMake;
            //   this.VMakeLst.push(this.vehiMakeCls);
            // }
        }
        //this.VMakeLst=this.VMakeLst.filter(e=>e.startsWith(q));
        this.isMake=true;
        console.log(this.VMakeLst);
        
        //this.vehidetailslst = this.vehidetailslst.filter(e => e.Make_Name.startsWith(q));
//console.log(this.vehidetailslst);
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
