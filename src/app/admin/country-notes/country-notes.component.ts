import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-country-notes',
  templateUrl: './country-notes.component.html',
  styleUrls: ['./country-notes.component.scss']
})
export class CountryNotesComponent implements OnInit, OnDestroy {

  CountryNoteForm: FormGroup;
  submitted = false;

  
  //varaible to recive countries
  currentUser: any;
  currentUserSubscription: Subscription;
  RuturnedCount : any;
  Countries = [];


  //to control showing country to who
  OrgAdmin : boolean = true;



  constructor(private routte:ActivatedRoute , private myroutter:Router,private apiService: ApiService,
    private authenticationService: AuthenticationService,
    
    private formBuilder: FormBuilder,

    
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


    this.CountryNoteForm = this.formBuilder.group({
     country_id: ['', Validators.required],
      note_en: ['', [Validators.required, Validators.minLength(12)]],
      note_ar: ['', [Validators.required, Validators.minLength(12)]],
      phone: ['', [Validators.required, Validators.minLength(9)]]
  });


    this.loadCountries();

    //to control showing country to who
    if(this.OrgAdmin == true){
      $(".countries").css("display","table-row");
      
    }else{
      $(".countries").css("display","none");
    }
  }



  get f() { return this.CountryNoteForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.CountryNoteForm.invalid) {
        return;
    }

   
    this.apiService.CountryNotesRequest(this.CountryNoteForm.value)
        .pipe(first())
        .subscribe(
            data => {
              alert("country note added");
               
            },
            error => {
               
            }
        );
  }





  //to load all countries
  private loadCountries() {
    this.apiService.GetCounRequest().pipe(first()).subscribe(data => {
        this.RuturnedCount = data;
        this.Countries = this.RuturnedCount.data;
   
        console.log(this.Countries);
    });
  }


}
