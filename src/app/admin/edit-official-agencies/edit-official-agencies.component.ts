import { ActivatedRoute, Router } from '@angular/router';
import { AddEditAgancy } from 'src/app//_models/crud-class/policy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-official-agencies',
  templateUrl: './edit-official-agencies.component.html', 
  styleUrls: ['./edit-official-agencies.component.scss']
})
export class EditOfficialAgenciesComponent implements OnInit, OnDestroy {


  EditAgancyForm: FormGroup;
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
  this.EditAgancyForm.value.status = event.target.value;
  }


  


  

  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/OfficialAgencies'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router,private apiService: ApiService,
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

    this.EditAgancyForm = this.formBuilder.group({
      id:                 [this.Id],
      country_id:         ['', [Validators.required]],
      name_en:            ['', [Validators.required, Validators.minLength(3)]],
      name_ar:            ['', [Validators.required, Validators.minLength(3)]],
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


  get f() { return this.EditAgancyForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.EditAgancyForm.invalid) {
        return;
    }

    this.apiService.EditAgancyRequest(this.EditAgancyForm.value)
        .pipe(first())
        .subscribe(
            data => {
              alert("country added");
              this.myroutter.navigate(['/OfficialAgencies'])
               
            },
            error => {
               
            } 
        );
  }


}
