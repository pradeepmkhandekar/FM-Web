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
  
    constructor(private http:HttpClient,
    private fmmessageservice:FmserviceService) {
      this.vehiMake=new VehicleMake();
      this.vehiMake.makeid=1;
      this.vehiMake.makename="TOYOTA"; 
      //console.log(this.vehiMake);
      this.vehiMakelst=[];
      this.vehiMakelst.push(this.vehiMake);
      //console.log(this.vehiMakelst);
      this.vehiMake=new VehicleMake();
      this.vehiMake.makeid=2;
      this.vehiMake.makename="FORD"; 
      this.vehiMakelst.push(this.vehiMake);
      //console.log(this.vehiMakelst);
      this.vehiMake=new VehicleMake();
      this.vehiMake.makeid=3;
      this.vehiMake.makename="NISSAN"; 
      this.vehiMakelst.push(this.vehiMake);
      //console.log(this.vehiMakelst);
      this.vehiMake=new VehicleMake();
      this.vehiMake.makeid=4;
      this.vehiMake.makename="VOLKSWAGEN"; 
      this.vehiMakelst.push(this.vehiMake);
      //console.log(this.vehiMakelst);
      this.vehiMake=new VehicleMake();
      this.vehiMake.makeid=5;
      this.vehiMake.makename="HONDA"; 
      this.vehiMakelst.push(this.vehiMake);
      console.log(this.vehiMakelst);
    }
  
    public checkLogin (request:AuthenticationInputInfo):Observable<LoginResponse>{
      return this.http.post<LoginResponse>(this.fmmessageservice.getApiUrl(),request,httpOptions).pipe(
        catchError(this.handleError<LoginResponse>('checkLogin'))
      );
    }

    public vehiMakeAuto(request:string){
      return this.vehiMakelst.filter(e=>e.makename.startsWith(request));
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
  