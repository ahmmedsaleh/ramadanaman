import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-add-country-city',
  templateUrl: './add-country-city.component.html', 
  styleUrls: ['./add-country-city.component.scss'] 
})
export class AddCountryCityComponent implements OnInit, OnDestroy {


  AddCounCityForm: FormGroup; 
  submitted = false;


   //varaible to recive countries
   currentUser: any;
   currentUserSubscription: Subscription;
   RuturnedCount : any;
   Countries = [];


  //to control showing section type to who
  OrgAdmin : boolean = true;
 

  

  


  constructor(private routte:ActivatedRoute , private myroutter:Router, private apiService: ApiService,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,) { 
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

  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/CountriesCites'])
  }

  

  ngOnInit(): void {

    this.loadCountries();

    


    this.AddCounCityForm = this.formBuilder.group({
      type:         ['', Validators.required],
      country_id:   [''],
      name_en:      ['', [Validators.required, Validators.minLength(3)]],
      name_ar:      ['', [Validators.required, Validators.minLength(3)]],
      image:        ['', Validators.required],
      phone_code:   ['', [Validators.required, Validators.minLength(3)]]
   });


  





    //to control showing section type to who
    if(this.OrgAdmin == true){
      $(".section-type").css("display","table-row");
      $(".image-row").css("display","table-row");
      
    }else{
      $(".section-type").css("display","none");
      $(".image-row").css("display","none");
    }

    //to show country when choose sub section
    $('select.select-section').change(function(){
      var val = $(this).val();
      if(val === "sub"){
          $(this).siblings('.country').fadeIn(400);
          $(this).siblings('.country').css("display","inline-block");
      }else 
          $(this).siblings('.country').fadeOut(400); 
    });


    //to hide placeholder on form focus
    $('[placeholder]').focusin(function () {
      $(this).attr('data-text', $(this).attr('placeholder'));
      $(this).attr('placeholder', '');
      }).blur(function () {
      $(this).attr('placeholder', $(this).attr('data-text'));
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
    this.AddCounCityForm.value.image = event.target.files[0].name;
  }

  get f() { return this.AddCounCityForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.AddCounCityForm.invalid) {
        return;
    }

    this.apiService.AddCountryCity(this.AddCounCityForm.value)
        .pipe(first())
        .subscribe(
            data => {
              alert("country added");
              this.myroutter.navigate(['/CountriesCites'])
               
            },
            error => {
               
            } 
        );
  }
}
