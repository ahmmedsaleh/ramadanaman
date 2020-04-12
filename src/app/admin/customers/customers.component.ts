import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, OnDestroy {

  currentUser: any;
  currentUserSubscription: Subscription;
  RuturnedCustomers : any;
  Customers = [];  

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
    this.loadCustomers(); 
  } 

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }


  //to go to edit Place 
  goToEditCustomer(e){
    let element = e.srcElement;
    let elementId = $(element).val();
    this.router.navigate(['/EditCustomers'], {queryParams:{id : elementId}}); 
  }

  //to delete status
  goToDeleteCustomer(e){
    let element = e.srcElement;
    let elementId = $(element).val();
    this.apiService.DeleteCustomerRequest(elementId)
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
  goToChStatusCustomer(e){
    let element = e.srcElement;
    let elementId = $(element).val();
    this.apiService.ChangeCustomerStatusRequest(elementId)
  .pipe(first())
  .subscribe(
      data => {
        alert("status Edited");
         
      },
      error => {
         
      }
  );
  }


  //to load all customers
  private loadCustomers() {
    this.apiService.GetCustomersRequest().pipe(first()).subscribe(data => {
        this.RuturnedCustomers = data;
        this.Customers = this.RuturnedCustomers.data;
   
        console.log(this.Customers);
    });
  }



  //to get value of checked customers 
  selectedCustomers = [];
  onCheckboxChange(e) {
    if (e.target.checked) {
      this.selectedCustomers.push(e.target.value);
      console.log(this.selectedCustomers);
    } else {
      for(let i = 0; i <  this.selectedCustomers.length; i++){
        if(this.selectedCustomers[i] == e.target.value){
          this.selectedCustomers.splice(i,1)
        }
        console.log(this.selectedCustomers);
      }
    }
  }

}
