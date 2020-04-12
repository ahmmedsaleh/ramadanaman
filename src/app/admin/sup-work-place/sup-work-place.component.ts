import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-sup-work-place',
  templateUrl: './sup-work-place.component.html',
  styleUrls: ['./sup-work-place.component.scss']
})
export class SupWorkPlaceComponent implements OnInit {


  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/SitesSupervisors'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router) { }

  ngOnInit(): void {
  }

}
