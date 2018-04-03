import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { CityRequest } from './CityRequest';
import { CityResponse } from './CityResponse'
import { LoginResponse } from './LoginResponse';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { CityDetails } from './CityDetails';
import { of} from 'rxjs/observable/of';
import { FmserviceService } from './fmservice.service';
import { CityVehiResponse } from './CityVehiResponse';
import { request } from 'http';


const httpOptions = {
    headers:new HttpHeaders({ 'Content-Type' : 'application/json' ,'Token':'1234567890'})
   };


@Injectable()
export class CityService{
    constructor(private http:HttpClient, private fmmessageservice:FmserviceService) {}
    
    public GetRtoCity(request:CityRequest):Observable<CityResponse>{
        return this.http.post<CityResponse>(this.fmmessageservice.getApiUrl()+ "get-city-and-state",request,httpOptions).pipe(
            catchError(this.handleError<CityResponse>("GetRtoCity"))
        );
    }

    public GetCityVehicle():Observable<CityVehiResponse>{
        return this.http.get<CityVehiResponse>(this.fmmessageservice.getApiUrl()+ "get-city-vehicle", httpOptions).pipe(
            catchError(this.handleError<CityVehiResponse>("Error Occured"))
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
        this.fmmessageservice.add('privatecar services: ' + message);
      }
    
}