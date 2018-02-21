import { Component, OnInit } from '@angular/core';
import { FmserviceService} from '../fmservice.service'

import { LoginserviceService} from '../login/loginservice.service';
import { InsuMastInfo} from './InsuMastInfo';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  todaydate;
  fullname;
  lstInsuMastinfo:InsuMastInfo[];
  constructor(private fmservice:FmserviceService,
     public loginapiservice:LoginserviceService) { }

  ngOnInit() {
    this.todaydate=this.fmservice.showTodayDate();
    this.loginapiservice.getInsumast()
      .subscribe(lstInsuMastinfo=>this.lstInsuMastinfo=lstInsuMastinfo);
      this.fmservice.currentMessage.subscribe(message=>this.fullname=message);
  }

}
