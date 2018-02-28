import { Component, OnInit } from '@angular/core';
import { FmserviceService} from '../fmservice.service'
import { Router} from '@angular/router';
import { Location } from '@angular/common';

import { LoginserviceService} from '../login/loginservice.service';
import { InsuMastInfo} from './InsuMastInfo';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css','../login/bootstrap.min.css','../login/font-awesome.min.css','../login/fonts.css','../login/style-finmart.css','../login/responsive-finmart.css']
})
export class MainpageComponent implements OnInit {
  todaydate;
  fullname;
  lstInsuMastinfo:InsuMastInfo[];
  isLogin=true;
  constructor(private fmservice:FmserviceService,
     public loginapiservice:LoginserviceService,private router:Router,location:Location) { }

  ngOnInit() {
    this.todaydate=this.fmservice.showTodayDate();
    // this.loginapiservice.getInsumast()
    //   .subscribe(lstInsuMastinfo=>this.lstInsuMastinfo=lstInsuMastinfo);
      this.fullname=sessionStorage.getItem("FullName");
<<<<<<< HEAD
=======
      this.fmservice.setIsLoggedIn(true);
  }

  OnClick(data){
    if(data==1)
    {
      this.router.navigate(['app-privatecar']);
    }
>>>>>>> yogesh
  }

}
