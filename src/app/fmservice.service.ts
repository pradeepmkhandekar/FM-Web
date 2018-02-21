import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class FmserviceService {
  messages:string[]=[];
  FullName:string;
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

 private messageSource=new BehaviorSubject<string>(this.FullName);
 currentMessage=this.messageSource.asObservable();

 changeMessage(message:string)
 {
   this.FullName=message;
   this.messageSource.next(message);
 }

}
