import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-official-agencies',
  templateUrl: './official-agencies.component.html',
  styleUrls: ['./official-agencies.component.scss'] 
})
export class OfficialAgenciesComponent implements OnInit, OnDestroy { 

  currentUser: any;
  currentUserSubscription: Subscription;
  RuturnedAgancies : any;
  Agancies = [];  

  constructor(
    private apiService: ApiService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
     //to get the token and user type
     this.currentUserSubscription = this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
      console.log(data);
  });
  }

  ngOnInit(): void {
    this.loadAgancies(); 
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }


  //to go to edit Place 
  goToEditAgancy(e){
    let element = e.srcElement;
    let elementId = $(element).val();
    this.router.navigate(['/EditOfficialAgencies'], {queryParams:{id : elementId}}); 
  }

  //to delete status
  goToDeleteAgancy(e){
    let element = e.srcElement;
    let elementId = $(element).val();
    this.apiService.DeleteAgancyRequest(elementId)
    .pipe(first())
    .subscribe(
        data => {
          alert("Place Deleted");
        },
        error => {     
        } 
    ); 
  }

  //to change place status
  goToChStatusAgancy(e){
    let element = e.srcElement;
    let elementId = $(element).val();
    this.apiService.ChangeAgancyStatusRequest(elementId)
  .pipe(first())
  .subscribe(
      data => {
        alert("status Edited");
         
      },
      error => {
         
      }
  );
  }


  //to load all agancies
  private loadAgancies() {
    this.apiService.GetAganciesRequest().pipe(first()).subscribe(data => {
        this.RuturnedAgancies = data;
        this.Agancies = this.RuturnedAgancies.data;
   
        console.log(this.Agancies);
    });
  }


   //to get value of checked countries 
   selectedAgancies = [];
   onCheckboxChange(e) {
     if (e.target.checked) {
       this.selectedAgancies.push(e.target.value);
       console.log(this.selectedAgancies);
     } else {
       for(let i = 0; i <  this.selectedAgancies.length; i++){
         if(this.selectedAgancies[i] == e.target.value){
           this.selectedAgancies.splice(i,1)
         }
         console.log(this.selectedAgancies);
       }
     }
   }

}
