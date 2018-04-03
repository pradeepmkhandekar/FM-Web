import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of} from 'rxjs/observable/of';
import { catchError, map, tap} from 'rxjs/operators';

import { PersonalLoanRequest} from './PersonalLoanRequest';
import {ApiRequest} from './ApiRequest';
import {ApiResponse} from './ApiResponse';
import {application} from './application';
import {MasterData} from './MasterData';
import {quote} from './quote';
import {FmserviceService} from '../fmservice.service';
import { ThrowStmt } from '@angular/compiler';

const httpOptions = {
  headers:new HttpHeaders({ 'Content-Type' : 'application/json' ,'Token':'1234567890'})
 };

@Injectable()
export class PersonalserviceService {

  constructor(private http:HttpClient,
    private fmservice:FmserviceService) { }


    public ManagePersonalLoan(request:ApiRequest):Observable<ApiResponse>{
      return this.http.post<ApiResponse>(this.fmservice.getApiUrl()+"manage-personalloan",request,httpOptions)
      .pipe(catchError(this.handleError<ApiResponse>('ManagePersonalLoan')));
    }

    public GetPersonalRequest(request:ApiRequest):Observable<ApiResponse>{
      return this.http.post<ApiResponse>(this.fmservice.getApiUrl()+"get-personalloan-request",request,httpOptions)
      .pipe(catchError(this.handleError<ApiResponse>('GetPersonalRequest')));
    }

    public DeletePersonalRequest(request:ApiRequest):Observable<ApiResponse>{
      return this.http.post<ApiResponse>(this.fmservice.getApiUrl()+"delete-personal-loan-request",request,httpOptions)
      .pipe(catchError(this.handleError<ApiResponse>('DeletePersonalRequest')));
    }

    public SetQuoteToPersonal(request:ApiRequest):Observable<ApiResponse>{
      return this.http.post<ApiResponse>(this.fmservice.getApiUrl()+"set-quote-to-application-personal-loan",request,httpOptions)
      .pipe(catchError(this.handleError<ApiResponse>('SetQuoteToPersonal')));
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      this.fmservice.add('personal services: ' + message);
    }
}
