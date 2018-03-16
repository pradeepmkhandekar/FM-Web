import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { PrivatecarService} from './privatecarservice.service';
import { VehicleMake} from '../vehiclemake';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {VehicleResponse} from '../VehicleResponse';
import {VehiRequest} from '../VehiRequest';
import { VehicleDetails } from '../VehicleDetails';
import { slider} from '../slider';
import { CityResponse } from '../CityResponse';
import { CityRequest } from '../CityRequest';
import { CityService } from '../CityService.service';
import { CityDetails } from '../CityDetails';
import { CityVehiResponse } from '../CityVehiResponse';
import { CityVehiDetails } from '../CityVehiDetails';
import { FmserviceService } from '../fmservice.service';
import { HorizonapiService} from '../horizonapi.service';
import { PremiumInitiateReq} from '../PremiumInitiateReq';
import { PremiumInitiateRes} from '../PremiumInitiateRes';
import { Summary} from '../Summary';
import { PremiumBreakup} from '../PremiumBreakup';
import { Insurer} from '../Insurer';
import { horizonResponse} from '../horizonResponse';

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
  public slider:slider;
  public cityRequest:CityRequest;
  public cityResponse: CityResponse;
  public cityDetails:CityDetails;
  public cityVehiResponse:CityVehiResponse;
  public cityVehiDetails:CityVehiDetails[];

  
  vehiMake : string;
  vehiModel : string;
  isMake:boolean=false;
  isModel:boolean=false;
  vehiVariant:string;
  CubicCapacity:string;
  Fueltype:string;
  slidervalue:number;
  ClaimBonus:number;
  CngValue:number;
  RegDate:string;
  MfgMonth:string;
  MfgYear:string;
  ExpiryDate:string;
  Rto:string;
  PresentInsurer:string;
  CustomerName:string;
  Mobile:string;
  CarNo:string;

  constructor(private PrivatecarService:PrivatecarService,
              private CityService:CityService,
              private fmservice:FmserviceService,
            private horizonsrevice:HorizonapiService) { 
    this.datePickerConfig = Object.assign({},{
      containerClass : "theme-dark-blue",
      showWeekNumbers : false,
      dateInputFormat : "DD-MM-YYYY"
    });
    this.CarNo=this.fmservice.getcarNo().toUpperCase();
  }

  ngOnInit() {
    this.slidervalue=5;
    this.slider=new slider();
    this.slider.floor=0;
    this.slider.ceil=10;
    this.slider.showTicks=true;
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

  searchCity(event:any) {
    
    this.cityRequest ={PinCode:"400077"};
    this.CityService.GetRtoCity(this.cityRequest as CityRequest)
    .subscribe(
      CityResponse => this.cityResponse=CityResponse
    );

    if(this.cityResponse)
     { 
       console.log(this.cityResponse);
       // this.cityDetails = this.cityResponse.MasterData;
     }
  }

  searchCityVehicle(event:any){
    debugger;
    this.Rto = event.target.value;;
    this.CityService.GetCityVehicle()
      .subscribe(
        CityVehiResponse => this.cityVehiResponse=CityVehiResponse
      );

      if (this.cityVehiResponse){
        this.cityVehiDetails = this.cityVehiResponse.MasterData;
        //console.log(this.cityVehiResponse);

        if(this.Rto!="" && this.Rto!=undefined)
        {
          if(this.cityVehiDetails!=null)
          {
            console.log(this.cityVehiDetails);
          }
        }
    
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

 
  drag(event){
    
  }

}
