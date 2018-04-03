import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RoutesRecognized, ActivatedRoute} from '@angular/router';

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
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { ThrowStmt } from '@angular/compiler';
import { FormGroup, FormControl, CheckboxControlValueAccessor } from '@angular/forms';
import { LoginserviceService } from '../login/loginservice.service';
import { InsuMastInfo } from '../mainpage/InsuMastInfo';
import { InsuMastResponse } from '../InsuMastResponse';
import {PresentInsurer} from '../PresentInsurer'


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
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",
            "Oct", "Nov", "Dec"];
  years = ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008",
            "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];
  presentInsurer = [
    new PresentInsurer(1, "Bajaj"),
    new PresentInsurer(2, "Bharti"),
    new PresentInsurer(5, "HDFC"),
    new PresentInsurer(6, "ICICI"),
    new PresentInsurer(7, "IFFCO"),
    new PresentInsurer(30, "Kotak"),
    new PresentInsurer(15, "L & T Ins."),
    new PresentInsurer(33, "Liberty Videocon"),
    new PresentInsurer(35, "Magma"),
    new PresentInsurer(8, "National "),
    new PresentInsurer(12, "New India"),
    new PresentInsurer(13, "Oriental"),
    new PresentInsurer(16, "Raheja"),
    new PresentInsurer(9, "Reliance"),
    new PresentInsurer(10, "Sundaram"),
    new PresentInsurer(17, "SBI General"),
    new PresentInsurer(18, "Shriram"),
    new PresentInsurer(11, "Tata AIG"),
    new PresentInsurer(14, "United"),
  ];

 
  
            
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
  public cityVehiDetailsOne:CityVehiDetails;
  public RtoList = [];
  public premiumInitiateReq:PremiumInitiateReq;
  public horizonresponse:horizonResponse;
  public premiumInitiateRes:PremiumInitiateRes;
  public summary:Summary;
  public premiumBreakup:PremiumBreakup;
  public lstInsurer:Insurer;
  public insuMastResponse : InsuMastResponse

  
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
  carNo1:string;
  isRto:boolean=false;
  IndividualCompany : boolean;
  IndivCompany:string = "Company";
  PrivCardata;

  constructor(private PrivatecarService:PrivatecarService,
              private CityService:CityService,
              private fmservice:FmserviceService,
            private horizonsrevice:HorizonapiService,
            private loginservice:LoginserviceService,
            private router:ActivatedRoute) { 
    this.datePickerConfig = Object.assign({},{
      containerClass : "theme-dark-blue",
      showWeekNumbers : false,
      dateInputFormat : "DD-MM-YYYY",
    });
  }

  ngOnInit() {
    this.slidervalue=5;
    this.slider=new slider();
    this.slider.floor=0;
    this.slider.ceil=10;
    this.slider.showTicks=true;

    this.PrivCardata = new FormGroup({
      vehiVariant : new FormControl(),
      CngValue : new FormControl(),
      RegDate : new FormControl(),
      MfgMonth : new FormControl(),
      MfgYear : new FormControl(),
      ExpiryDate : new FormControl(),
      Rto : new FormControl(),
      PresentInsurer : new FormControl(),
      CustomerName : new FormControl(),
      Mobile : new FormControl()
    });
     this.CarNo=this.router.snapshot.queryParams['carno'].toUpperCase();
     //this.search('a');
    //this.CarNo=this.fmservice.getcarNo();
    this.vehiRequest ={ProductId:1};
    this.PrivatecarService.GetVehMake(this.vehiRequest as VehiRequest)
    .subscribe(
      VehicleResponse => this.vehicleResponse=VehicleResponse
    );
    console.log(this.vehicleResponse);
  }


  
  search(event:any) {
    this.vehiMake= event.target.value;
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
    //debugger;
    this.Rto = event.target.value;;
    this.CityService.GetCityVehicle()
      .subscribe(
        CityVehiResponse => this.cityVehiResponse=CityVehiResponse
      );

      if (this.cityVehiResponse){
        this.cityVehiDetails = this.cityVehiResponse.MasterData;
        console.log(this.cityVehiResponse.MasterData);
        this.RtoList = [];
        for (var i = 0; i <= this.cityVehiDetails.length-1; i++){
          this.carNo1 = this.cityVehiDetails[i].VehicleCity_RTOCode.substring(0,2);
            if(this.RtoList.includes(this.cityVehiDetails[i].RTO_City)==false)
            {
               this.RtoList.push("["+this.cityVehiDetails[i].VehicleCity_RTOCode + "] "+this.cityVehiDetails[i].RTO_City);
               //this.RtoList.push(this.cityVehiDetails[i].RTO_City);
            }
        }
        

      }
      else{
        this.CityService.GetCityVehicle()
          .subscribe(
            CityVehiResponse => this.cityVehiResponse=CityVehiResponse
          );
          if (this.cityVehiResponse){
              this.cityVehiDetails = this.cityVehiResponse.MasterData;
              console.log(this.cityVehiResponse.MasterData);
              this.RtoList = [];
              for (var i = 0; i <= this.cityVehiDetails.length-1; i++){
                //this.carNo1 = this.cityVehiDetails[i].VehicleCity_RTOCode.substring(0,2);
                  if(this.RtoList.includes(this.cityVehiDetails[i].RTO_City)==false)
                  {
                    this.RtoList.push("["+this.cityVehiDetails[i].VehicleCity_RTOCode + "] "+this.cityVehiDetails[i].RTO_City);
                    //this.RtoList.push(this.cityVehiDetails[i].RTO_City);
                  }
              }
          }
      }

      if(this.Rto!="" && this.Rto!=undefined)
        {
          if(this.RtoList!=null && this.RtoList.length >0)
          {
            this.isRto=true;
            console.log(this.RtoList);
          }
          else{
            this.isRto=false;
          }
        }
  }



  fnPassToVModel(param){
  this.vehiModel=param;
  this.isModel=false;
  this.bindVehiVariant();
  }

  
  fnPassToRto(param){
    this.Rto=param;
    this.isRto=false;
    
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

  BindInsurer(){
    
    this.loginservice.getInsumast()
    .subscribe(
        InsuMastResponse => this.insuMastResponse = InsuMastResponse
    );

    if (this.insuMastResponse)
    {
      console.log(this.insuMastResponse);
    }
    else{
      this.loginservice.getInsumast()
      .subscribe(
          InsuMastResponse => this.insuMastResponse = InsuMastResponse
      );
      if (this.insuMastResponse){
        console.log(this.insuMastResponse);
      }
    }
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

  onFilterChange(event:any){
    
    this.IndividualCompany = event.target.checked;
    if(this.IndividualCompany){
      this.IndivCompany = "Individual";
    }
    else{
      this.IndivCompany = "Company";
    }
  }

 
  drag(event){
    
  }

  fnGetQuotes(data){
    debugger;
    console.log(this.IndividualCompany);
     this.premiumInitiateReq=new PremiumInitiateReq();
     this.premiumInitiateReq.search_reference_number="";
     this.premiumInitiateReq.product_id=10;
     this.premiumInitiateReq.vehicle_id=this.vehiVariant;
     this.cityVehiDetailsOne=new CityVehiDetails();
     let rtocode:string;
     let rtocities:string[];
     rtocities=this.Rto.split(' ');
     rtocode=rtocities[0].replace("[","").replace("]","").trim();
     this.cityVehiDetailsOne=this.cityVehiDetails.filter(e=>e.VehicleCity_RTOCode==rtocode)[0];
     this.premiumInitiateReq.rto_id= this.cityVehiDetailsOne.VehicleCity_Id.toString(); //"1";//this.cityVehiDetails.filter(e=>e.RTO_City==this.Rto)[0].VehicleCity_Id.toString();
     this.premiumInitiateReq.vehicle_insurance_type="";
     this.premiumInitiateReq.vehicle_manf_date=data.RegDate;
     this.premiumInitiateReq.vehicle_registration_date= data.RegDate;
     this.premiumInitiateReq.policy_expiry_date= data.ExpiryDate;
     this.premiumInitiateReq.prev_insurer_id=data.PresentInsurer;
     this.premiumInitiateReq.vehicle_registration_type=this.IndivCompany;
     this.premiumInitiateReq.vehicle_ncb_current="0";
     this.premiumInitiateReq.is_claim_exists="yes";
     this.premiumInitiateReq.birth_date="";
     this.premiumInitiateReq.method_type="premium";
     this.premiumInitiateReq.execution_async="yes";
     this.premiumInitiateReq.registration_no=this.CarNo.replace(" ","-");
     this.premiumInitiateReq.electrical_accessory="0";
     this.premiumInitiateReq.non_electrical_accessory="0";
     this.premiumInitiateReq.voluntary_deductible="0";
     this.premiumInitiateReq.is_llpd="no";
     this.premiumInitiateReq.is_antitheft_fit="no";
     this.premiumInitiateReq.is_external_bifuel="no";
     this.premiumInitiateReq.first_name=data.CustomerName;
     this.premiumInitiateReq.last_name=data.CustomerName;
     this.premiumInitiateReq.middle_name="";
     this.premiumInitiateReq.external_bifuel_value="0";
     this.premiumInitiateReq.pa_owner_driver_si="100000";
     this.premiumInitiateReq.pa_named_passenger_si="";
     this.premiumInitiateReq.pa_unnamed_passenger_si="0";
     this.premiumInitiateReq.pa_paid_driver_si="0";
     this.premiumInitiateReq.vehicle_expected_idv="0";
     this.premiumInitiateReq.mobile=data.Mobile;
     this.premiumInitiateReq.email="finmarttest@gmail.com";
     this.premiumInitiateReq.crn="170842";
     this.premiumInitiateReq.secret_key=this.fmservice.getsecret_key();
     this.premiumInitiateReq.client_key=this.fmservice.getclient_key();
     this.premiumInitiateReq.ss_id="0";
     this.premiumInitiateReq.ip_address="";
     this.premiumInitiateReq.mac_address="";
     this.premiumInitiateReq.device_id="";
     this.premiumInitiateReq.fba_id="35847";

     this.horizonsrevice.InitiatePremiums(this.premiumInitiateReq as PremiumInitiateReq).subscribe(
      PremiumInitiateRes=>this.premiumInitiateRes=PremiumInitiateRes
     );

     if(this.premiumInitiateRes!=null)
     {
         this.summary=new Summary();
         this.summary=this.premiumInitiateRes.MasterData;
         if(this.summary!=null)
         {
            this.premiumInitiateReq.search_reference_number=this.summary.Request_Unique_Id;

            this.horizonsrevice.AfterInitiatePremiun(this.premiumInitiateReq as PremiumInitiateReq).subscribe(
              horizonResponse=>this.horizonresponse=horizonResponse
             );


             if(this.horizonresponse!=null)
             {
                 this.lstInsurer=new Insurer();
                 this.lstInsurer=this.horizonresponse.Insurer;
             }

         }
     }

  }

}
