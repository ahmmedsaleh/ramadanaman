import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-u-navbar',
  templateUrl: './u-navbar.component.html',
  styleUrls: ['./u-navbar.component.scss']
})
export class UNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // for scrrolling
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 10)
      $("nav").css("padding","10px 40px");
    else 
    $("nav").css("padding","25px 40px");
  });
  }

}
