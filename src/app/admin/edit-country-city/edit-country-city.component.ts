import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-country-city',
  templateUrl: './edit-country-city.component.html',
  styleUrls: ['./edit-country-city.component.scss'] 
})
export class EditCountryCityComponent implements OnInit, OnDestroy {


  EditCounCityForm: FormGroup; 
  submitted = false;
 

  //varaible to recive countries
  currentUser: any;
  currentUserSubscription: Subscription;
  RuturnedCount : any;
  Countries = [];



  //to control showing section type to who
  OrgAdmin : boolean = true;



  // varibles come from url
  Type:any;
  Id : any;


 
  //to get the value of radio button status
  radioChangeHandeler(event:any){
    this.EditCounCityForm.value.status = event.target.value;
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
      this.Type = this.routte.snapshot.queryParamMap.get('type');
      //check if type city or country to control display of rows
      if(this.Type == "city"){
        $(".image-row").addClass("hidee");
        $(".phone-code-row").addClass("hidee");
      }
      else{
        $(".image-row").removeClass("hidee");
        $(".phone-code-row").removeClass("hidee");
      }

   }


  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/CountriesCites'])
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadCountries();

    //form validation
    this.EditCounCityForm = this.formBuilder.group({
      id:           [this.Id],
      type:         ['', Validators.required],
      country_id:   [''],
      name_en:      ['', [Validators.required, Validators.minLength(3)]],
      name_ar:      ['', [Validators.required, Validators.minLength(3)]],
      image:        ['', Validators.required],
      phone_code:   ['', [Validators.required, Validators.minLength(3)]],
      status:       ['']
   });


    //to control showing section type to who
    if(this.OrgAdmin == true){
      $(".section-type").css("display","table-row");
      $(".image-row").css("display","table-row");
      
    }else{
      $(".section-type").css("display","none");
      $(".image-row").css("display","none");
    }

    //to show country when choose sub section && contror Displaying of rows 
    $('select.select-section').change(function(){
      var val = $(this).val();
      if(val === "sub"){
          $(this).siblings('.country').fadeIn(400);
          $(this).siblings('.country').css("display","inline-block");
          $(".image-row").addClass("hidee");
          $(".phone-code-row").addClass("hidee");
      }else{ 
          $(this).siblings('.country').fadeOut(400); 
          this.CountryType = true;
          console.log(this.CountryType);
          $(".image-row").removeClass("hidee");
          $(".phone-code-row").removeClass("hidee");
      }
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
  this.EditCounCityForm.value.image = event.target.files[0].name;
  }

  get f() { return this.EditCounCityForm.controls; }

  //when click save
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.EditCounCityForm.invalid) {
        return;
    }
    
    if(this.Type == "country"){
      this.apiService.EditCountry(this.EditCounCityForm.value )
        .pipe(first())
        .subscribe(
            data => {
              alert("country Edited");
              this.myroutter.navigate(['/CountriesCites'])
               
            },
            error => {
               
            } 
        );
    }else if(this.Type == "city"){
      this.apiService.EditCity(this.EditCounCityForm.value)
        .pipe(first())
        .subscribe(
          data => {
            alert("city Edited");
            this.myroutter.navigate(['/CountriesCites'])

          },
          error => {

          }
        )
    }
  }
}
