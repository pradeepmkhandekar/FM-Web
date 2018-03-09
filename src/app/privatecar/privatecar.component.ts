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

  public vehiMakelst:VehicleMake[];
  public vehicleResponse:VehicleResponse;
  public vehiRequest: VehiRequest;
  public vehidetailslst:VehicleDetails[];
  public newvariantsleect:VehicleDetails[];
  public vehiMakeCls :VehicleMake; 
  public VMakeLst =[];
  public VModelLst =[];

  vehiMake : string;
  vehiModel : string;
  isMake:boolean=false;
  isModel:boolean=false;
  vehiVariant:string;
  CubicCapacity:string;
  Fueltype:string;

  constructor(private PrivatecarService:PrivatecarService) { 
    this.datePickerConfig = Object.assign({},{
      containerClass : "theme-dark-blue",
      showWeekNumbers : false,
      dateInputFormat : "DD-MM-YYYY"
    });
  }

  ngOnInit() {
  }
  
  search(event:any) {
    this.vehiMake=event.target.value;
    this.vehiRequest ={ProductId:1};
    this.PrivatecarService.GetVehMake(this.vehiRequest as VehiRequest)
    .subscribe(
      VehicleResponse => this.vehicleResponse=VehicleResponse
    );

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
      this.vehiRequest ={ProductId:1};
      this.PrivatecarService.GetVehMake(this.vehiRequest as VehiRequest)
      .subscribe(
        VehicleResponse => this.vehicleResponse=VehicleResponse
      );
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
    
    if(this.vehiMake!="" && this.vehiMake!=undefined)
    {
      if(this.VMakeLst!=null && this.VMakeLst.length>0)
      {
        //this.VMakeLst=this.VMakeLst.filter(e=>e.startsWith(this.vehiMake.charAt(0).toUpperCase()));
        this.isMake=true;
        console.log(this.VMakeLst);
      }
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

  searchModel(event:any) {
    this.vehiModel=event.target.value;
    this.vehiRequest ={ProductId:1};
    this.PrivatecarService.GetVehMake(this.vehiRequest as VehiRequest)
    .subscribe(
      VehicleResponse => this.vehicleResponse=VehicleResponse
    );

    if(this.vehicleResponse)
     { 
        this.vehidetailslst = this.vehicleResponse.MasterData;
        this.VModelLst = [];
        for (var i = 0; i <= this.vehidetailslst.length-1; i++){

            if(this.VModelLst.includes(this.vehidetailslst[i].Model_Name)==false &&
               this.vehiMake==this.vehidetailslst[i].Make_Name)
            {
               this.VModelLst.push(this.vehidetailslst[i].Model_Name);
            }
        }
     }
     else
     {
      this.vehiRequest ={ProductId:1};
      this.PrivatecarService.GetVehMake(this.vehiRequest as VehiRequest)
      .subscribe(
        VehicleResponse => this.vehicleResponse=VehicleResponse
      );
        if(this.vehicleResponse)
        {
          this.vehidetailslst = this.vehicleResponse.MasterData;
          this.VModelLst = [];
          for (var i = 0; i <= this.vehidetailslst.length-1; i++){

            if(this.VModelLst.includes(this.vehidetailslst[i].Model_Name)==false &&
            this.vehiMake==this.vehidetailslst[i].Make_Name)
            {
                this.VModelLst.push(this.vehidetailslst[i].Model_Name);
             }
          }
        }
     }
    
    if(this.vehiModel!="" && this.vehiModel!=undefined)
    {
      if(this.VModelLst!=null && this.VModelLst.length>0)
      {
        //this.VMakeLst=this.VMakeLst.filter(e=>e.startsWith(this.vehiMake.charAt(0).toUpperCase()));
        this.isModel=true;
        console.log(this.VModelLst);
      }
    }
    else
    {
      this.isModel=false;
    }
  }
  fnPassToVModel(param){
  this.vehiModel=param;
  this.isModel=false;
  this.bindVehiVariant();
  }

  bindVehiVariant(){
    this.vehiRequest ={ProductId:1};
    this.PrivatecarService.GetVehMake(this.vehiRequest as VehiRequest)
    .subscribe(
      VehicleResponse => this.vehicleResponse=VehicleResponse
    );

    if(this.vehicleResponse)
     { 
        this.vehidetailslst = this.vehicleResponse.MasterData;
        this.vehidetailslst=this.vehidetailslst.filter(e=>e.Make_Name===this.vehiMake && e.Model_Name===this.vehiModel);
     }
     else
     {
      this.vehiRequest ={ProductId:1};
      this.PrivatecarService.GetVehMake(this.vehiRequest as VehiRequest)
      .subscribe(
        VehicleResponse => this.vehicleResponse=VehicleResponse
      );
        if(this.vehicleResponse)
        {
          this.vehidetailslst = this.vehicleResponse.MasterData;
          this.vehidetailslst=this.vehidetailslst.filter(e=>e.Make_Name===this.vehiMake && e.Model_Name===this.vehiModel);
        }
     }

     this.Fueltype="Petrol";
  }

  variChange(event:any){
     this.vehiVariant=event.target.value;
     if(this.vehidetailslst!=null && this.vehidetailslst.length>0)
     {
         this.newvariantsleect=this.vehidetailslst.filter(e=>e.Make_Name==this.vehiMake &&
        e.Model_Name==this.vehiModel && e.Variant_ID.toString()==this.vehiVariant);
        this.CubicCapacity=this.newvariantsleect[0].Cubic_Capacity.toString();
     }
  }

}
