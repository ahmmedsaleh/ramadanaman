
import { ActivatedRoute, Router } from '@angular/router';
import { AddEditCitySupervisor } from 'src/app//_models/crud-class/policy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/_services/api-service/api.service'; 
declare var $ :any;
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services'; 
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-city-supervisors',
  templateUrl: './edit-city-supervisors.component.html',
  styleUrls: ['./edit-city-supervisors.component.scss']
})
export class EditCitySupervisorsComponent implements OnInit, OnDestroy {


  EditCitySupForm: FormGroup; 
  submitted = false;


  //varaible to recive countries
  currentUser: any;
  currentUserSubscription: Subscription;
  RuturnedCount : any;
  Countries = []; 
  RuturnedCities : any;
  Cities = [];


  //control who log in and data to show
  OrgAdmins:boolean = true;
  CounAdmins:boolean = true;




  // varibles come from url
  Id : any;
 


 


  //to get the value of radio button for status
  radioStatusChangeHandeler(event:any){
    //this.AddEditCitySuper.Status = event.target.value;
  }

 



 


  



  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/CitySupervisors'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router, private apiService: ApiService,
    private authenticationService: AuthenticationService, private formBuilder: FormBuilder) { 
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

  //to get the value of radio button status 
  radioChangeHandeler(event:any){
    this.EditCitySupForm.value.status = event.target.value;
  }


  //to return cities depended on country id 
 selectChangeHandler (event) {
  let countryid = event.target.value ;
  console.log(countryid);
   for (let index = 0; index < this.Countries.length; index++){
      if ( this.Countries[index].id == countryid ){
        this.Cities = this.Countries[index].cities;
        console.log(this.Cities);
      }
    }
    console.log(this.Cities);
}


  ngOnInit(): void {

    this.loadCountries();



    this.EditCitySupForm = this.formBuilder.group({
      id:               [this.Id],
      username:         ['', [Validators.required, Validators.minLength(3)]],
      password:         ['', [Validators.required, Validators.minLength(6)]],
      full_name:        ['', [Validators.required, Validators.minLength(9)]],
      email:            ['', [Validators.required, Validators.email]],
      country_id:       ['', Validators.required],
      city_id:          ['', Validators.required],
      status:           ['', Validators.required]
   });




    //to hide placeholder on form focus
    $('[placeholder]').focusin(function () {
      $(this).attr('data-text', $(this).attr('placeholder'));
      $(this).attr('placeholder', '');
      }).blur(function () {
      $(this).attr('placeholder', $(this).attr('data-text'));
    });

    //show password when hover eye icon (convert type from password to text)
	var PassFild = $(".password") 
	$(".show-pass").hover(function () {
		PassFild.attr('type', 'text');
	}, function(){
		PassFild.attr('type', 'password');
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


  get f() { return this.EditCitySupForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.EditCitySupForm.invalid) {
        return;
    }

    this.apiService.EditCitySupRequest(this.EditCitySupForm.value)
        .pipe(first())
        .subscribe(
            data => {
              alert("country Edited");
              this.myroutter.navigate(['/WorkPlaces'])
               
            },
            error => {
               
            }
        );
  }


}
