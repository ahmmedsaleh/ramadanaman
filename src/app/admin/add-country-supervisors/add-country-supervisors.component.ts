
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-add-country-supervisors', 
  templateUrl: './add-country-supervisors.component.html',
  styleUrls: ['./add-country-supervisors.component.scss']
})
export class AddCountrySupervisorsComponent implements OnInit, OnDestroy {


  AddCountSupForm: FormGroup;
  submitted = false;


   //varaible to recive countries
   currentUser: any;
   currentUserSubscription: Subscription;
   RuturnedCount : any;
   Countries = [];


  //control who log in and data to show
  OrgAdmins:boolean = true; 


 

    




  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/CountrySupervisors'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router , private apiService: ApiService,
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




    this.AddCountSupForm = this.formBuilder.group({
      username:         ['', [Validators.required, Validators.minLength(3)]],
      password:   ['', [Validators.required, Validators.minLength(6)]],
      c_password:   ['', [Validators.required, Validators.minLength(6)]],
      name:      ['', [Validators.required, Validators.minLength(9)]],
      email:      ['', [Validators.required, Validators.email]],
      country_id:        ['', [Validators.required]],
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

  get f() { return this.AddCountSupForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.AddCountSupForm.invalid) {
        return;
    }

    this.apiService.AddCountrySupRequest(this.AddCountSupForm.value)
        .pipe(first())
        .subscribe(
            data => {
              alert("country added");
              this.myroutter.navigate(['/CountrySupervisors'])
               
            },
            error => { 
               
            } 
        );
  }

}
