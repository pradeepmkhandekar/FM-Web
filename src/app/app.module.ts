import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MdTableModule} from '@angular/material';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { FmserviceService} from './fmservice.service';
import { LoginserviceService} from '../app/login/loginservice.service';
import { PrivatecarService} from '../app/privatecar/privatecarservice.service';
import { HorizonapiService} from './horizonapi.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PrivatecarComponent } from './privatecar/privatecar.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {FilterPipeModule} from 'ngx-filter-pipe';
import {CityService} from './CityService.service';
import { MotorComponent } from './motor/motor.component';
import { PersonalloanComponent } from './personalloan/personalloan.component';
import { PersonalserviceService } from './personalloan/personalservice.service';


const appRoutes:Routes=[
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'app-mainpage',
    component:MainpageComponent
  },
  {
    path:'app-privatecar',
    component:PrivatecarComponent
  },
  {
    path:'app-motor',
    component:MotorComponent
  },
  {
    path:'app-personal',
    component:PersonalloanComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MainpageComponent,
    PrivatecarComponent,
    MotorComponent,
    PersonalloanComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpModule,    
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    FilterPipeModule
  ],
  providers: [FmserviceService,LoginserviceService,PrivatecarService, CityService,HorizonapiService, PersonalserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
