import { Injectable } from '@angular/core';

@Injectable()
export class FmserviceService {
  messages:string[]=[];
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

}
