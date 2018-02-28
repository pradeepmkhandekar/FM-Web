import { Component } from '@angular/core';
import { FmserviceService} from './fmservice.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Magic Finmart App';
  shheadFooter=false;
  constructor(private fmservice:FmserviceService,location: Location) {
   }

   ngOnInit() {
     //alert(location.pathname);
    if(location.pathname !='/')
    {
      this.shheadFooter=true;
    }
    else
    {
      this.shheadFooter=false;
    }
  }

  ngAfterViewInit(){
    //this.shheadFooter=true;
  }
}