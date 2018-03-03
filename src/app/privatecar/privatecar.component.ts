import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { PrivatecarService} from './privatecarservice.service';

@Component({
  selector: 'app-privatecar',
  templateUrl: './privatecar.component.html',
  styleUrls: ['./privatecar.component.css',
  '../login/bootstrap.min.css',
  '../login/font-awesome.min.css',
  '../login/fonts.css',
  '../login/style-finmart.css',
  '../login/responsive-finmart.css',
  './jquery.mCustomScrollbar.css']
})
export class PrivatecarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  

}
