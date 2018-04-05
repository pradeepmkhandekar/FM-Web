import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-privatecarquotes',
  templateUrl: './privatecarquotes.component.html',
  styleUrls: ['./privatecarquotes.component.css',
  '../login/bootstrap.min.css',
  '../login/font-awesome.min.css',
  '../login/fonts.css',
  '../login/style-finmart.css',
  '../login/responsive-finmart.css',
  '../privatecar/jquery.mCustomScrollbar.css']
})
export class PrivatecarquotesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
