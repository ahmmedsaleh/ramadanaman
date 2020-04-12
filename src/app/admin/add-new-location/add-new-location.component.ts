
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ValueTransformer } from '@angular/compiler/src/util';

 



@Component({
  selector: 'app-add-new-location',
  templateUrl: './add-new-location.component.html',
  styleUrls: ['./add-new-location.component.scss']
})
export class AddNewLocationComponent implements OnInit, OnDestroy {

  AddLocationForm: FormGroup; 
  submitted = false;
 


   //varaible to recive countries
   currentUser: any;
   currentUserSubscription: Subscription;
   RuturnedCount : any;
   Countries = [];
   RuturnedCities : any;
   Cities = [];




  //to control country & city show to who depended on type of admin
  Orgadmin:boolean = true;
  CounAdmin:boolean = true;
  CityAdmin:boolean = true;
  

 


  

   

     //aray of Place Types
     PlaceTyps = [
      {id: 1 , name: "distribution"}, // for men & women
      {id: 2 , name: "filling"}   // for women only
      ]

  Days = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']




  constructor(private routte:ActivatedRoute , private myroutter:Router, private apiService: ApiService,
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

  


  




  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/WorkPlaces'])
  }



  //to get value of checked dayes
  onCheckboxChange(e) {
    const dayes: FormArray = this.AddLocationForm.get('dayes') as FormArray;

    if (e.target.checked) {
      dayes.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      dayes.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          dayes.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  ngOnInit(): void {

    this.loadCountries();

    this.AddLocationForm = this.formBuilder.group({
      name_en:          ['', [Validators.required, Validators.minLength(3)]],
      name_ar:          ['', [Validators.required, Validators.minLength(3)]],
      country_id:       [''],
      city_id:          [''],
      person_required:  ['', Validators.required],
      place_type:       ['', Validators.required],
      hours:            ['', Validators.required],
      map_code:         ['', Validators.required],
      dayes: this.formBuilder.array([], [Validators.required]),
      mssg_en:          [''],
      mssg_ar:          [''],
   });




    //to show Voluntary hours when choose Place Type
    $('select.place-type').change(function(){
      var val = $(this).val();
      console.log(val);
      if(val == "dist"|| val == "fill"){
          $(this).siblings('.Volhours').fadeIn(400);
          $(this).siblings('.Volhours').css("display","inline-block");
      }else 
          $(this).siblings('.Volhours').fadeOut(400); 
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


  get f() { return this.AddLocationForm.controls; }



  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.AddLocationForm.invalid) {
        return;
    }

    this.apiService.AddLocationRequest(this.AddLocationForm.value)
        .pipe(first())
        .subscribe(
            data => {
              alert("country added");
              this.myroutter.navigate(['/WorkPlaces'])
               
            },
            error => {
               
            }
        );
  }

}
