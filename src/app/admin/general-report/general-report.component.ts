import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';


@Component({
  selector: 'app-general-report',
  templateUrl: './general-report.component.html',
  styleUrls: ['./general-report.component.scss']
})
export class GeneralReportComponent implements OnInit, OnDestroy {

 
   //varaible to recive countries
   currentUser: any;
   currentUserSubscription: Subscription; 
   RuturnedCount : any;
   Countries = []; 




  constructor(private apiService: ApiService,
    private authenticationService: AuthenticationService) { 
       //to get the token and user type
       this.currentUserSubscription = this.authenticationService.currentUser.subscribe(data => {
        this.currentUser = data;
        console.log(data);
      });
    }

  ngOnDestroy() {
  // unsubscribe to ensure no memory leaks
  this.currentUserSubscription.unsubscribe();
  }
  // to show and hide cities
  showCities(e){
    let element = $(e.srcElement).parents(".count-head");
    $(element).siblings(".citiess").toggleClass("showww");
  }


   // to show and hide cities
   showPlaces(e){
    let element = $(e.srcElement).parents(".city-head");
    $(element).siblings(".placess").toggleClass("showww");
  }

  ngOnInit(): void {


    this.loadCountries();

    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
      if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass('show');
  
      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
      });
  
      return false;
    });
    
  }


  //to load all countries
  private loadCountries() {
    this.apiService.GetCounRequest().pipe(first()).subscribe(data => {
        this.RuturnedCount = data;
        this.Countries = this.RuturnedCount.data;
        console.log(this.Countries);
    });
  }

}
