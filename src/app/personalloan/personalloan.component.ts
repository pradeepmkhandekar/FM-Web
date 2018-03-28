import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RoutesRecognized, ActivatedRoute} from '@angular/router';
import {PersonalserviceService} from './personalservice.service';
import {ApiRequest} from './ApiRequest';
import {ApiResponse} from './ApiResponse';
import {application} from './application';
import {MasterData} from './MasterData';
import {PersonalLoanRequest} from './PersonalLoanRequest';
import {quote} from './quote';
import { ThrowStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-personalloan',
  templateUrl: './personalloan.component.html',
  styleUrls: ['./personalloan.component.css','../login/bootstrap.min.css',
  '../login/font-awesome.min.css',
  '../login/fonts.css',
  '../login/style-finmart.css',
  '../login/responsive-finmart.css',
  '../privatecar/ion-rangeSlider.css',
  '../privatecar/ion-rangeSlider-skinFlat.css']
})
export class PersonalloanComponent implements OnInit {


  persloanform;

  gender:string;
  ApplicantDOB:string;
  ApplicantName:string;
  Occupation:string;
  MonthlyIncome:number;
  ExistingEmi:number;
  PanNo:string;
  ReqLoanAmount:number;
  LocanTenure:number;

  apirequest:ApiRequest;
  personalrequest:PersonalLoanRequest;
  apiresponse:ApiResponse;
  applic:application;
  masterdata:MasterData;
  quote:quote;

  constructor(private pservice:PersonalserviceService) { }

  ngOnInit() {
    this.persloanform=new FormGroup({
      ApplicantName:new FormControl("",Validators.compose([
        Validators.required
      ])),
      gender:new FormControl(""),
      ApplicantDOB:new FormControl("",Validators.compose([
        Validators.required
      ])),
      Occupation:new FormControl(""),
      MonthlyIncome:new FormControl("",Validators.compose([
        Validators.required
      ])),
      ExistingEmi:new FormControl("",Validators.compose([
        Validators.required,
        Validators.maxLength(10)
      ])),
      PanNo:new FormControl("",Validators.compose([
        Validators.required
      ])),
      ReqLoanAmount:new FormControl("",Validators.compose([
        Validators.required
      ]))
    });
  }

  GetPersonalQuotes(data){
    debugger;
    this.apirequest=new ApiRequest();
    this.apirequest.loan_requestID="";
    this.apirequest.FBA_id=35779;
    this.apirequest.PersonalLoanRequest=new PersonalLoanRequest();
    this.apirequest.PersonalLoanRequest.quote_id=567;
    this.apirequest.PersonalLoanRequest.ApplicantDOB=data.ApplicantDOB;
    this.apirequest.PersonalLoanRequest.ApplicantGender=data.gender;
    this.apirequest.PersonalLoanRequest.ApplicantIncome=data.MonthlyIncome;
    this.apirequest.PersonalLoanRequest.ApplicantNme=data.ApplicantName;
    this.apirequest.PersonalLoanRequest.ApplicantObligations=400;
    this.apirequest.PersonalLoanRequest.ApplicantSource=1;
    this.apirequest.PersonalLoanRequest.BrokerId=0;
    this.apirequest.PersonalLoanRequest.LoanRequired=50000;
    this.apirequest.PersonalLoanRequest.LoanTenure=4;
    this.apirequest.PersonalLoanRequest.api_source="";
    this.apirequest.PersonalLoanRequest.empcode="";

    this.pservice.ManagePersonalLoan(this.apirequest as ApiRequest).subscribe(
      ApiResponse => this.apiresponse=ApiResponse
    );

    if(this.apiresponse!=null)
    {
        this.apirequest=new ApiRequest();
        this.apirequest.FBA_id=35779;

        this.pservice.GetPersonalRequest(this.apirequest as ApiRequest).subscribe(
          ApiResponse => this.apiresponse=ApiResponse
        );
    }

  }

}
