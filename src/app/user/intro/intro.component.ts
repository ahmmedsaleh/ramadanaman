import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".intro-page .logo").hover(function(){
        $(this).siblings(".nice-message").fadeIn(500)
    }, function(){
        $(this).siblings(".nice-message").fadeOut(500)
    });
  }

}
