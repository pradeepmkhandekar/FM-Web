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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const appRoutes:Routes=[
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'app-mainpage',
    component:MainpageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpModule,    
    HttpClientModule
  ],
  providers: [FmserviceService,LoginserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
