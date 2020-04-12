import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-members-volunteers',
  templateUrl: './members-volunteers.component.html',
  styleUrls: ['./members-volunteers.component.scss'] 
})
export class MembersVolunteersComponent implements OnInit, OnDestroy {  


  currentUser: any;
  currentUserSubscription: Subscription;
  RuturnedMember : any;
  Members = [];  

  constructor(
    private apiService: ApiService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
       //to get the token and user type
       this.currentUserSubscription = this.authenticationService.currentUser.subscribe(data => {
        this.currentUser = data;
        console.log(data);
    });
  }

  ngOnInit(): void {
    this.loadMembers();
  }


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }


   //to go to edit Place 
   goToEditMember(e){
    // let element = e.srcElement;
    // let elementId = $(element).val();
    let elementId = 1;
    this.router.navigate(['/EditMemberVolunteers'], {queryParams:{id : elementId, city_id : 1}}); 
  }

  //to delete country
  goToDeleteMember(e){
    // let element = e.srcElement;
    // let elementId = $(element).val();
    let elementId = 1;
    this.apiService.DeleteMemberRequest(elementId) 
    .pipe(first())
    .subscribe(
        data => {
          alert("Member Deleted");
        },
        error => {     
        } 
    );  
  }


  //to change city supervisor status
  goToChStatusMember(e){
    let element = e.srcElement;
    let elementId = $(element).val();
    this.apiService.ChangeMemberStatusRequest(elementId)
  .pipe(first()) 
  .subscribe(
      data => {
        alert("status Edited");
         
      },
      error => {
         
      }
  );
  }


  //to load all Members
  private loadMembers() {
    this.apiService.GetMembersRequest().pipe(first()).subscribe(data => {
        this.RuturnedMember = data;
        this.Members = this.RuturnedMember.data;
        console.log(this.Members);
    });
  }


}
