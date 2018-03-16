import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class FmserviceService {
  messages:string[]=[];
  FullName:string;

  apirul:string;

  constructor() { }
  showTodayDate() {
    let ndate = new Date();
    return ndate;
 }
 add(message:string){
   this.messages.push(message);
 }

 clear(){
   this.messages=[];
 }

 getApiUrl(){
  return this.apirul = 'http://api.magicfinmart.com/api/'; 
 }

 private messageSource=new BehaviorSubject<string>(this.FullName);
 currentMessage=this.messageSource.asObservable();

 changeMessage(message:string)
 {
   this.FullName=message;
   this.messageSource.next(message);
 }

 private loggedIn = new BehaviorSubject<boolean>(true); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  setIsLoggedIn(islogged){
    
    this.loggedIn.next(islogged);
  }

  private carRegNo:string;

  getcarNo(){
    return this.carRegNo;
  }

  setCarRegNo(carregno:string)
  {
    this.carRegNo=carregno;
  }

  getsecret_key() {
    let secret_key = "SECRET-VG9N6EVV-MIK3-1GFC-ZRBV-PE7XIQ8DV4GY";
    return secret_key;
 }
 getclient_key() {
  let client_key = "CLIENT-WF4GWODI-HMEB-Q7M6-CLES-DEJCRF7XLRVI";
  return client_key;
}
getHorizonInitiateApiUrl(){
  return 'http://horizon.policyboss.com:5000/quote/premium_initiate'; 
 }
 getHorizonPremiumApiUrl(){
   return "http://horizon.policyboss.com:5000/quote/premium_list_db";
 }
}
