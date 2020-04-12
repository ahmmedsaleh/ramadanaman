
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';



@Component({
  selector: 'app-edit-workplaces',
  templateUrl: './edit-workplaces.component.html', 
  styleUrls: ['./edit-workplaces.component.scss']
})
export class EditWorkplacesComponent implements OnInit, OnDestroy {

  EditLocationForm: FormGroup; 
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


  // varibles come from url
  Id : any;



  
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

  Days = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];



  
  



    


  

 

  //to get the value of radio button status 
  radioChangeHandeler(event:any){
  this.EditLocationForm.value.status = event.target.value;
  }



  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/WorkPlaces'])
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



//to get value of checked dayes
onCheckboxChange(e) {
  const dayes: FormArray = this.EditLocationForm.get('dayes') as FormArray;

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



    this.EditLocationForm = this.formBuilder.group({
      id:               [this.Id],
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
      status:           ['']
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


  get f() { return this.EditLocationForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.EditLocationForm.invalid) {
        return;
    }

    this.apiService.EditLocationRequest(this.EditLocationForm.value)
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
