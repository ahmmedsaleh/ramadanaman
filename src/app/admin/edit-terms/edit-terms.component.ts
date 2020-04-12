
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/_services/api-service/api.service';
import { EditTerms } from 'src/app//_models/crud-class/policy';
declare var $ :any;
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-terms',
  templateUrl: './edit-terms.component.html',
  styleUrls: ['./edit-terms.component.scss']
})
export class EditTermsComponent implements OnInit, OnDestroy { 

  EditTermsForm: FormGroup; 
  submitted = false;


   //varaible to recive countries
   currentUser: any;
   currentUserSubscription: Subscription;



  //Control display of terms list
   ListOne:boolean = true;
   ListTwo:boolean = true;
   ListThree:boolean = true;
   ListFour:boolean = true;
   ListFive:boolean = true;
   ListSix:boolean = true;
   ListSeven:boolean = true;




  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/MainSitePages'])
  }

  //to add another list
  addList(){
    
   
    
      // let list = $(".one-row").html();
      // $(".cont").append(list);
  
    

  }


  constructor(
    private routte:ActivatedRoute , private myroutter:Router, private apiService: ApiService,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
  ) { 
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

    this.EditTermsForm = this.formBuilder.group({
      header_en:    [''],
      header_ar:    [''],
      first_en:     [''],
      first_ar:     [''],
      second_en:    [''],
      second_ar:    [''],
      third_en:     [''],
      third_ar:     [''],
      fourth_en:    [''],
      fourth_ar:    [''],
      fifth_en:     [''],
      fifth_ar:     [''],
      six_en:       [''],
      six_ar:       [''],
      seven_en:     [''],
      seven_ar:     [''],
   });
    
  }


   //to get the name of the image
   getFiles(event){
    this.EditTermsForm.value.image = event.target.files[0].name;
  }


  get f() { return this.EditTermsForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.EditTermsForm.invalid) {
        return;
    }

    this.apiService.EditTermsRequest(this.EditTermsForm.value)
        .pipe(first())
        .subscribe(
            data => {
              alert("country added");
              this.myroutter.navigate(['/MainSitePages'])
               
            },
            error => {
               
            } 
        );
  }

}
