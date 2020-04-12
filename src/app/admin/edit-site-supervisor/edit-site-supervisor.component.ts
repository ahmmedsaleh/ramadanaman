
import { ActivatedRoute, Router } from '@angular/router';
import { EditMemVol } from 'src/app//_models/crud-class/policy';
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-edit-site-supervisor',
  templateUrl: './edit-site-supervisor.component.html',
  styleUrls: ['./edit-site-supervisor.component.scss']
})
export class EditSiteSupervisorComponent implements OnInit, OnDestroy {

  EditSiteSupForm: FormGroup; 
  submitted = false;



   //varaible to recive countries
   currentUser: any;
   currentUserSubscription: Subscription;
   returnedPlaces : any;
   Places = [];


   // varibles come from url
    Id : any;
    CityId : any;
 


  
  //array of typies
  Types = ["Individual", "Family", "Agency"];

 
  //aray of nationalities
  Nationalities = [
    {id: 1, name: "Nationality1"},
    {id: 2, name: "Nationality2"},
    {id: 3, name: "Nationality3"},
    {id: 4, name: "Nationality4"},
    {id: 5, name: "Nationality5"},
    {id: 6, name: "Nationality6"},
    {id: 7, name: "Nationality7"},
    {id: 8, name: "Nationality8"},
    {id: 9, name: "Nationality9"}

  ]


  //aray of Locations
  Locations = [
    {id: 1, name: "Location1"},
    {id: 2, name: "Location2"},
    {id: 3, name: "Location3"},
    {id: 4, name: "Location4"},
    {id: 5, name: "Location5"},
    {id: 6, name: "Location6"},
    {id: 7, name: "Location7"},
    {id: 8, name: "Location8"},
    {id: 9, name: "Location9"}

  ]


  //aray of Cities
Agancies= [
  {id: 1, name: "Agancy1"},
  {id: 2, name: "Agancy1"},
  {id: 3, name: "Agancy1"},
  {id: 4, name: "Agancy1"},
  {id: 5, name: "Agancy1"},
  {id: 6, name: "Agancy1"},
  {id: 7, name: "it"},
  {id: 8, name: "Agancy1"},
  {id: 9, name: "Agancy1"}

]



  

  constructor( private routte:ActivatedRoute , private myroutter:Router, private apiService: ApiService,
    private authenticationService: AuthenticationService, private formBuilder: FormBuilder) {
      //to get the token and user type
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(data => {
        this.currentUser = data;
        console.log(data);
      });

       //get the variables sent in link
      this.Id = (this.routte.snapshot.queryParamMap.get('id'));
      this.CityId = (this.routte.snapshot.queryParamMap.get('city_id'));
  }


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }


  //to get the value of radio button status 
  radioChangeHandelerGender(event:any){
    this.EditSiteSupForm.value.gender = event.target.value;
  }


  //to get the value of radio button status 
  radioChangeHandelerNews(event:any){
    this.EditSiteSupForm.value.news_letter = event.target.value;
  }

  //to get the value of radio button status 
   radioChangeHandelerStatus(event:any){
    this.EditSiteSupForm.value.status = event.target.value;
  }



  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/SitesSupervisors'])
  }

  ngOnInit(): void {


    this.loadPlaces(this.CityId);



    this.EditSiteSupForm = this.formBuilder.group({
      id:                   [this.Id],
      type:                 [''],
      agancey:              [''],
      acc_id:               [''],
      password:             ['', [Validators.required, Validators.minLength(3)]],
      first_name_en:        ['', [Validators.required, Validators.minLength(3)]],
      second_name_en:       ['', [Validators.required, Validators.minLength(3)]],
      third_name_en:        ['', [Validators.required, Validators.minLength(3)]], 
      fourth_name_en:       ['', [Validators.required, Validators.minLength(3)]],
      first_name_ar:        ['', [Validators.required, Validators.minLength(3)]],
      second_name_ar:       ['', [Validators.required, Validators.minLength(3)]],
      third_name_ar:        ['', [Validators.required, Validators.minLength(3)]],
      fourth_name_ar:       ['', [Validators.required, Validators.minLength(3)]],
      phone:                ['', [Validators.required, Validators.minLength(7)]],
      email:                ['', [Validators.required, Validators.email]],
      gender:               ['', Validators.required],
      mem_type:             ['', Validators.required],
      place_id:             [''],
      nationality:          ['', Validators.required],
      news_letter:          ['', Validators.required],
      note:                 [''],
      status:               ['', Validators.required]
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


    //to show places when choose membership = site supervisor
    $('select.mem-type').change(function(){
      var val = $(this).val();
      if(val === "sup"){
          $(this).siblings('.place').fadeIn(400);
          $(this).siblings('.place').css("display","inline-block");
      }else 
          $(this).siblings('.place').fadeOut(400); 
    });


    //to show agancies when choose orgnization
    $('select.regType').change(function(){
      var val = $(this).val(); 
      console.log(val);
      if(val === "orgnization"){
          $('.select-agency-group').fadeIn(400);
      }else 
          $('.select-agency-group').fadeOut(400);
    });

     //to show id when choose IT
     $('select.select-agency').change(function(){
        
      var vallll = $(this).val();
      console.log(vallll);
      if(vallll === '7'){
          $('.acadimic-id').fadeIn(400);
          $('.acadimic-id').css("display","inline-block");
      }else 
          $('.acadimic-id').fadeOut(400); 
    });


  }


   //to load all places
   private loadPlaces(id:number) {
    this.apiService.GetPlacesByCityIdRequest(id).pipe(first()).subscribe(data => {
        this.returnedPlaces = data;
        this.Places = this.returnedPlaces.data;
   
        console.log(this.Places);
    });
  }


  get f() { return this.EditSiteSupForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.EditSiteSupForm.invalid) {
        return;
    }

    this.apiService.EditSiteSupRequest(this.EditSiteSupForm.value)
        .pipe(first())
        .subscribe(
            data => {
              alert("Members Edited");
              this.myroutter.navigate(['/SitesSupervisors'])
               
            },
            error => {
               
            }
        );
    }

}
