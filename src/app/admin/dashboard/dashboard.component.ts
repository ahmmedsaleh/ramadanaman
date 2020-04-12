import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $: any;


import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../../_models';
import { UserService, AuthenticationService } from '../../_services';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy  {

  currentUser: any;
  currentUserSubscription: Subscription;
  users: any;
 
  constructor(private apiService: ApiService ,  private authenticationService: AuthenticationService,
    private userService: UserService) { 
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;
        
    });
  }

  // fetch(){
  //   this.apiService.fetch().subscribe(data => console.log(data));
  // }
  ngOnInit(): void {
   console.log(this.currentUser.success.token);
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
}

}
