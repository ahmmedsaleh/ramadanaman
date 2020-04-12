
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-official-agencies',
  templateUrl: './add-official-agencies.component.html',
  styleUrls: ['./add-official-agencies.component.scss']
})
export class AddOfficialAgenciesComponent implements OnInit, OnDestroy {

  AddAgancyForm: FormGroup;
  submitted = false;

  //varaible to recive countries
  currentUser: any; 
  currentUserSubscription: Subscription;
  RuturnedCount : any;
  Countries = [];


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
     }

  ngOnDestroy() {
  // unsubscribe to ensure no memory leaks
  this.currentUserSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadCountries();



    this.AddAgancyForm = this.formBuilder.group({
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


  get f() { return this.AddAgancyForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.AddAgancyForm.invalid) {
        return;
    }

    this.apiService.AddAgancyRequest(this.AddAgancyForm.value)
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
