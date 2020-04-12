import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  //control tab Countries & Cities show to who
  OrgAdmins:boolean = true;
  OrgCounAdmins:boolean = true; 
  OrgCounCityAdmins : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
