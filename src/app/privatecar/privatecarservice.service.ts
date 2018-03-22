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
import { VehicleMake} from '../vehiclemake';
import { VehicleModel} from '../vehiclemodel';
import { VehicleDetails} from '../VehicleDetails';
import { VehicleResponse} from '../VehicleResponse';
import { VehiRequest} from '../VehiRequest';

const httpOptions = {
    headers:new HttpHeaders({ 'Content-Type' : 'application/json' ,'Token':'1234567890'})
   };

@Injectable()
export class PrivatecarService {

  public InsuMast:InsuMastInfo;
  public vehiMake:VehicleMake;
  public vehiModel:VehicleModel;
  public vehiMakelst:VehicleMake[];
  public vehiModellst:VehicleModel[];
  public vehicleresponse:VehicleResponse;
  
    constructor(private http:HttpClient,
    private fmmessageservice:FmserviceService) {
      
    }
  
    public checkLogin (request:AuthenticationInputInfo):Observable<LoginResponse>{
      return this.http.post<LoginResponse>(this.fmmessageservice.getApiUrl(),request,httpOptions).pipe(
        catchError(this.handleError<LoginResponse>('checkLogin'))
      );
    }

    public GetVehMake(request:VehiRequest):Observable<VehicleResponse>{
      return this.http.post<VehicleResponse>(this.fmmessageservice.getApiUrl()+"vehicle-details",request, httpOptions).pipe(
        catchError(this.handleError<VehicleResponse>('GetVehMake'))
      );
    }


    // public vehiMakeAuto(request:string){
    //   return this.vehiMakelst.filter(e=>e.makename.startsWith(request));
    // }


  
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
  