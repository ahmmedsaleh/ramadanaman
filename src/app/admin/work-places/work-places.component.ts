
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-work-places',
  templateUrl: './work-places.component.html',
  styleUrls: ['./work-places.component.scss'] 
})
export class WorkPlacesComponent implements OnInit, OnDestroy {
 

  currentUser: any;
  currentUserSubscription: Subscription;
  RuturnedPlaces : any;
  Places = [];  




  

  constructor(
    private apiService: ApiService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,) {
       //to get the token and user type
       this.currentUserSubscription = this.authenticationService.currentUser.subscribe(data => {
        this.currentUser = data;
        console.log(data);
    });
  }

  ngOnInit(): void {

    this.loadPlaces(); 

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }


  //to go to edit Place 
  goToEditPlace(e){
    let element = e.srcElement;
    let elementId = $(element).val();
    this.router.navigate(['/EditWorkPlace'], {queryParams:{id : elementId}}); 
  }

  //to delete status
  goToDeletePlace(e){
    let element = e.srcElement;
    let elementId = $(element).val();
    this.apiService.DeletePlaceRequest(elementId)
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
  goToChStatusPlace(e){
    let element = e.srcElement;
    let elementId = $(element).val();
    this.apiService.ChangePlaceStatusRequest(elementId)
  .pipe(first())
  .subscribe(
      data => {
        alert("status Edited");
         
      },
      error => {
         
      }
  );
  }

  


  //to load all countries
  private loadPlaces() {
    this.apiService.GetPlacesRequest().pipe(first()).subscribe(data => {
        this.RuturnedPlaces = data;
        this.Places = this.RuturnedPlaces.data;
   
        console.log(this.Places);
    });
  }


   //to get value of checked countries 
   selectedPlaces = [];
   onCheckboxChange(e) {
     if (e.target.checked) {
       this.selectedPlaces.push(e.target.value);
       console.log(this.selectedPlaces);
     } else {
       for(let i = 0; i <  this.selectedPlaces.length; i++){
         if(this.selectedPlaces[i] == e.target.value){
           this.selectedPlaces.splice(i,1)
         }
         console.log(this.selectedPlaces);
       }
     }
   }
 
}
