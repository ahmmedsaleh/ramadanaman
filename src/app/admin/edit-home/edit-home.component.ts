
import { ActivatedRoute, Router } from '@angular/router';
import { EditHomePage } from 'src/app//_models/crud-class/policy';
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.scss']
})
export class EditHomeComponent implements OnInit, OnDestroy {


  EditHomePageForm: FormGroup; 
  submitted = false;


   //varaible to recive countries
   currentUser: any;
   currentUserSubscription: Subscription;




  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/MainSitePages'])
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

    this.EditHomePageForm = this.formBuilder.group({
      image:            [''],
      about_text_en:    [''],
      about_text_ar:    [''],
    
   });

  }


  //to get the name of the image
  getFiles(event){
  this.EditHomePageForm.value.image = event.target.files[0].name;
  }

  get f() { return this.EditHomePageForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.EditHomePageForm.invalid) {
        return;
    }

    this.apiService.EditHomePageRequest(this.EditHomePageForm.value)
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
