import { Component, OnInit } from '@angular/core';
import { FmserviceService } from '../fmservice.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router} from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.css','../login/bootstrap.min.css',
  '../login/font-awesome.min.css',
  '../login/fonts.css',
  '../login/style-finmart.css',
  '../login/responsive-finmart.css']
})
export class MotorComponent implements OnInit {
   CarNo:string;
   inputOne:string;
   inputTwo:string;
   inputThree:string;
   inputFour:string;
   motordata;

  constructor(private router:Router,private fmservice:FmserviceService) { }

  ngOnInit() {
    this.motordata = new FormGroup({
      inputOne: new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("/^[a-zA-Z]*$/")
      ])),
      //inputOne:new FormControl(),
      inputTwo:new FormControl(),
      inputThree:new FormControl(),
      inputFour:new FormControl()
   });
  }
  
  GetDetails(data){
    this.CarNo=data.inputOne+" "+data.inputTwo+" "+data.inputThree+" "+data.inputFour;
    if(this.CarNo != ""){
        console.log(this.CarNo);
        this.fmservice.setCarRegNo(this.CarNo);
      //this.router.navigate(['app-privatecar']);
      location.href="app-privatecar?carno="+this.CarNo;
    }
  }

  public restrictNumeric(e) {
    let input;
    if (e.metaKey || e.ctrlKey) {
      return true;
    }
    if (e.which === 32) {
     return false;
    }
    if (e.which === 0) {
     return true;
    }
    if (e.which < 33) {
      return true;
    }
    input = String.fromCharCode(e.which);
    return !!/[\d\s]/.test(input);
   }
}
