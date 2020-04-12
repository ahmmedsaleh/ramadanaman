
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.scss'] 
})
export class EditAboutComponent implements OnInit, OnDestroy {

  EditAboutPageForm: FormGroup; 
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

    this.EditAboutPageForm = this.formBuilder.group({ 
      about_text_en:    [''],
      about_text_ar:    [''],
      image:            [''],
   });

  }

  //to get the name of the image
  getFiles(event){
    this.EditAboutPageForm.value.image = event.target.files[0].name;
  }


  get f() { return this.EditAboutPageForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.EditAboutPageForm.invalid) {
        return;
    }

    this.apiService.EditAboutPageRequest(this.EditAboutPageForm.value)
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
