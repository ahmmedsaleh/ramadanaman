import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-add-ads-banars',
  templateUrl: './add-ads-banars.component.html',
  styleUrls: ['./add-ads-banars.component.scss']
})
export class AddAdsBanarsComponent implements OnInit {

  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/AdsBaners'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router) { }

  ngOnInit(): void {
    //to hide placeholder on form focus
    $('[placeholder]').focusin(function () {
      $(this).attr('data-text', $(this).attr('placeholder'));
      $(this).attr('placeholder', '');
      }).blur(function () {
      $(this).attr('placeholder', $(this).attr('data-text'));
    });
  }

}
