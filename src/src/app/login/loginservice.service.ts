import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of} from 'rxjs/observable/of';
import { catchError, map, tap} from 'rxjs/operators';

import { AuthenticationInputInfo} from '../AuthenticationInputInfo';
import { MasterData} from '../MasterData';
import { LoginResponse} from '../LoginResponse';

import { FmserviceService } from '../fmservice.service';
import { InsuMastInfo } from '../mainpage/InsuMastInfo';
import { InsuMastResponse } from '../InsuMastResponse';

const httpOptions = {
 headers:new HttpHeaders({ 'Content-Type' : 'application/json' ,'Token':'1234567890'})
};

@Injectable()
export class LoginserviceService {

  //private apiUrl = 'http://apiservices.magicfinmart.com/api/Login/ProcessLogin';  // URL to web api
  private loginapiUrl = 'http://qa.mgfm.in/api/login';  // URL to web api
  private apiUrl = 'http://localhost:64018/api/Authenticate/';  // URL to web api

  constructor(private http:HttpClient,
  private fmmessageservice:FmserviceService) { }

  public InsuMast:InsuMastInfo;

  public checkLogin (request:AuthenticationInputInfo):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.loginapiUrl,request,httpOptions).pipe(
      catchError(this.handleError<LoginResponse>('checkLogin'))
    );
  }

//   public getInsumast():Observable<InsuMastInfo[]>{
//     return this.http.get<InsuMastInfo[]>(this.fmmessageservice.getApiUrl+"get-insurance-company",httpOptions).pipe(
//       catchError(this.handleError('error occured',[]))
//     );
//  }

    public getInsumast():Observable<InsuMastResponse>{
      return this.http.get<InsuMastResponse>(this.fmmessageservice.getApiUrl() + "get-insurance-company",httpOptions).pipe(
        catchError(this.handleError<InsuMastResponse>('getInsumast'))
      );
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
    this.fmmessageservice.add('fm services: ' + message);
  }

}
