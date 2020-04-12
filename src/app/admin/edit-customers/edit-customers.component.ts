
import { ActivatedRoute, Router } from '@angular/router';
import { AddEditCustomer } from 'src/app//_models/crud-class/policy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.scss']
})
export class EditCustomersComponent implements OnInit, OnDestroy {


  EditCustomerForm: FormGroup; 
  submitted = false;


   //varaible to recive countries
   currentUser: any;
   currentUserSubscription: Subscription;
   RuturnedCount : any;
   Countries = []; 


  // varibles come from url
  Id : any;



  //to get the value of radio button status
  radioChangeHandeler(event:any){
    this.EditCustomerForm.value.status = event.target.value;
  }

 
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
       //get the variables sent in link
       this.Id = (this.routte.snapshot.queryParamMap.get('id'));
  }


      
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadCountries(); 

    this.EditCustomerForm = this.formBuilder.group({
      id:           [this.Id],
      country_id:   ['', Validators.required],
      name_en:      ['', [Validators.required, Validators.minLength(3)]],
      name_ar:      ['', [Validators.required, Validators.minLength(3)]],
      link:         ['', Validators.required],
      image:        ['', Validators.required],
      status:        ['', Validators.required],
      
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
    this.EditCustomerForm.value.image = event.target.files[0].name;
    }
  
    get f() { return this.EditCustomerForm.controls; }


    onSubmit() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.EditCustomerForm.invalid) {
          return;
      }
  
      this.apiService.EditCustomerRequest(this.EditCustomerForm.value)
          .pipe(first())
          .subscribe(
              data => {
                alert("customer edited");
                this.myroutter.navigate(['/Customers'])
                 
              },
              error => {
                 
              } 
          );
    }

}
