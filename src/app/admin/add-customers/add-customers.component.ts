import { ActivatedRoute, Router } from '@angular/router';
import { AddEditAgancy, AddEditCustomer } from'src/app//_models/crud-class/policy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.scss']
})
export class AddCustomersComponent implements OnInit, OnDestroy {


  AddCustomerForm: FormGroup; 
  submitted = false;


   //varaible to recive countries
   currentUser: any;
   currentUserSubscription: Subscription;
   RuturnedCount : any;
   Countries = [];



  

  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/Customers'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router, private apiService: ApiService,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder) { 
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

  ngOnInit(): void {
    this.loadCountries();



    this.AddCustomerForm = this.formBuilder.group({
      country_id:   ['', Validators.required],
      name_en:      ['', [Validators.required, Validators.minLength(3)]],
      name_ar:      ['', [Validators.required, Validators.minLength(3)]],
      link:         ['', Validators.required],
      image:        ['', Validators.required],
      
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


   //to get the name of the image
   getFiles(event){
    this.AddCustomerForm.value.image = event.target.files[0].name;
  }


  get f() { return this.AddCustomerForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.AddCustomerForm.invalid) {
        return;
    }

    this.apiService.AddCustomerRequest(this.AddCustomerForm.value)
        .pipe(first())
        .subscribe(
            data => {
              alert("customer added");
              this.myroutter.navigate(['/Customers'])
               
            },
            error => {
                
            } 
        );
  }

}
