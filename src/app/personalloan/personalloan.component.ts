import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RoutesRecognized, ActivatedRoute} from '@angular/router';
import {PersonalserviceService} from './personalservice.service';
import {ApiRequest} from './ApiRequest';
import {ApiResponse} from './ApiResponse';
import {application} from './application';
import {MasterData} from './MasterData';
import {PersonalLoanRequest} from './PersonalLoanRequest';
import {quote} from './quote';

@Component({
  selector: 'app-personalloan',
  templateUrl: './personalloan.component.html',
  styleUrls: ['./personalloan.component.css','../login/bootstrap.min.css',
  '../login/font-awesome.min.css',
  '../login/fonts.css',
  '../login/style-finmart.css',
  '../login/responsive-finmart.css']
})
export class PersonalloanComponent implements OnInit {

  gender:string;
  ApplicantDOB:string;
  constructor() { }

  LoanTenure:string;

  ngOnInit() {
  }

}
