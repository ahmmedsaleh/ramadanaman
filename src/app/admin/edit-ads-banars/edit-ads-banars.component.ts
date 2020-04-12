import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-edit-ads-banars',
  templateUrl: './edit-ads-banars.component.html',
  styleUrls: ['./edit-ads-banars.component.scss']
})
export class EditAdsBanarsComponent implements OnInit {

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
