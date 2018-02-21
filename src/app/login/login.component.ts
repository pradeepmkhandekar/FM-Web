import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router} from '@angular/router';

import { FmserviceService} from '../fmservice.service'

import { LoginserviceService} from './loginservice.service';
import { AuthenticationInputInfo} from '../AuthenticationInputInfo';
import { MasterData} from '../MasterData';
import { LoginResponse} from '../LoginResponse';
import { $$ } from 'protractor';
import { CookieXSRFStrategy } from '@angular/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./style-finmart.css','./responsive-finmart.css','./fonts.css','./bootstrap.min.css','./font-awesome.min.css']
})
export class LoginComponent implements OnInit {
  formdata;
  passwordvalidation(formControl){
    if(formControl.value.length<5){
      return{"passwd":true};
    }
  }
  public authinfo:AuthenticationInputInfo;
  public masterdata:MasterData;
  fullname;
  
  public loginresponse:LoginResponse;
  
  constructor(private router:Router,
    private fmservices:FmserviceService,
    public loginapiservice:LoginserviceService) {}
    
  todaydate;
  ngOnInit() {
    this.formdata=new FormGroup({
      usname:new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      passwd: new FormControl("",this.passwordvalidation)
    });
    this.todaydate=this.fmservices.showTodayDate();
    //this.loadScript();
  }

  httpdata;
  displaydata(data) {this.httpdata = data;}

  onClickSubmit(data){
    if(data.usname=="live@gmail.com" && data.passwd=="01011980"){
      this.authinfo = { EmailId:data.usname,
                        Password:data.passwd, 
                        IpAdd:"198.178.0.100",
                        UserName:data.usname,
                        OldPassword:'',
                        FBAId:0,
                        DeviceId:'',
                        DeviceOS:'',
                        DeviceName:'null',
                        LastLog:'',
                        TokenId:'',
                        MobileNo:'',
                        UserType:'',
                        UserId:0,
                        VersionNo:'',
                        AppID:'',
                        AppUSERID:'',
                        AppPASSWORD:''};
      //console.log(this.authinfo); 

    this.loginapiservice.checkLogin(this.authinfo as AuthenticationInputInfo)
     .subscribe(
      LoginResponse => this.loginresponse=LoginResponse
     );

     if(this.loginresponse)
     { 
       
        console.log(this.loginresponse);
        let masterdata=new MasterData();
        masterdata=this.loginresponse.MasterData;
        console.log(masterdata);
        console.log(masterdata.FBAId);
        console.log(masterdata.FullName);
        console.log(masterdata.UserName);
     }
 
     
     //sessionStorage.setItem("FullName",this.authoutput.Fullname);

      //alert(sessionStorage.getItem("FullName"));
      //this.router.navigate(['app-mainpage']);
    }
    else{
      alert('Invalid Login');
      return false;
    }
  }

}
