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

}
