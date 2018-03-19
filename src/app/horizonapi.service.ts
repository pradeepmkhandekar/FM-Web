import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of} from 'rxjs/observable/of';
import { catchError, map, tap} from 'rxjs/operators';
import { FmserviceService } from './fmservice.service';
import { PremiumInitiateReq} from './PremiumInitiateReq';
import { PremiumInitiateRes} from './PremiumInitiateRes';
import { horizonResponse} from './horizonResponse';
import { ThrowStmt } from '@angular/compiler';

// const httpOptions = {
//   headers:new HttpHeaders({ 
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Headers": "Content-Type",
//   "Access-Control-Allow-Credentials": "true",
//   "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
//   'Content-Type' : 'application/json' ,
//   'UserName':'Datacomp',
//   'Password':'dc@pb123'})
//  };
const httpOptions = {
  headers:new HttpHeaders({"Access-Control-Allow-Origin": "*", 'Content-Type' : 'application/json' ,'Token':'1234567890'})
 };
@Injectable()
export class HorizonapiService {

  constructor(private http:HttpClient,
             private fmservice:FmserviceService) {}



  public InitiatePremiums(request:PremiumInitiateReq):Observable<PremiumInitiateRes>{
    return this.http.post<PremiumInitiateRes>(this.fmservice.getHorizonInitiateApiUrl(),request,httpOptions).pipe(
      catchError(this.handleError<PremiumInitiateRes>('InitiatePremiums'))
    );
  }

  public AfterInitiatePremiun(request:PremiumInitiateReq):Observable<horizonResponse>{
    return this.http.post<horizonResponse>(this.fmservice.getHorizonPremiumApiUrl(),request,httpOptions).pipe(
      catchError(this.handleError<horizonResponse>('AfterInitiatePremiun'))
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
      this.fmservice.add('privatecar services: ' + message);
    }

}
