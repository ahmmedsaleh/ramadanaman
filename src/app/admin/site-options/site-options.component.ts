import { ActivatedRoute, Router } from '@angular/router';
import { AddEditAgancy, AddEditCustomer } from'src/app//_models/crud-class/policy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-site-options',
  templateUrl: './site-options.component.html',
  styleUrls: ['./site-options.component.scss']
})
export class SiteOptionsComponent implements OnInit, OnDestroy { 

//varaible to recive countries
currentUser: any;
currentUserSubscription: Subscription;






// for edit option form
  EditOptionForm: FormGroup; 
  EOsubmitted = false;

//for member settings form
  EditMemSettForm: FormGroup; 
  EMsubmitted = false;

//for member settings form
  LangSettForm: FormGroup; 
  LSsubmitted = false;  

//for site logo settings form
  LogoSettForm: FormGroup; 
  SLsubmitted = false;    
    
//for Contact Info settings form
  ContactInfoSettForm: FormGroup; 
  CIsubmitted = false;    
  
//for socail networks settings form
  SocailNetSettForm: FormGroup; 
  SNsubmitted = false;      

  


//to get the value of radio button for allow new register
radioAllowNewRegChangeHandeler(event:any){
  this.EditMemSettForm.value.allow_new_reg = event.target.value;
}
//to get the value of radio button for member ship activation
radioMemShipChangeHandeler(event:any){
  this.EditMemSettForm.value.mem_act = event.target.value;
}
//to get the value of radio button for disable calender editing
radioCalenderEditChangeHandeler(event:any){
  this.EditMemSettForm.value.calender_edit = event.target.value;
}
//to get the value of radio button for defult language
radioDefLangChangeHandeler(event:any){
  this.LangSettForm.value.def_lang = event.target.value;
}
//to get the value of radio button for other language
radioOtherLangChangeHandeler(event:any){
  this.LangSettForm.value.oth_lang = event.target.value;
}

//to get the name of the image for logo image
getLogoFiles(event){
  this.LogoSettForm.value.site_logo = event.target.files[0].name;
}

//to get the value of radio button for site color
radioSiteColChangeHandeler(event:any){
  this.LogoSettForm.value.site_color = event.target.value;
}



  
  

 


 


  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/MainSitePages'])
  }

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

  ngOnInit(): void {


  this.EditOptionForm = this.formBuilder.group({
    name_en:          ['', [Validators.required, Validators.minLength(3)]],
    name_ar:          ['', [Validators.required, Validators.minLength(3)]],
    desc_en:          ['', [Validators.required, Validators.minLength(20)]],
    desc_ar:          ['', [Validators.required, Validators.minLength(20)]],
    keywords_en:      ['', [Validators.required, Validators.minLength(10)]],
    keywords_ar:      ['', [Validators.required, Validators.minLength(10)]],
    email:            ['', [Validators.required, Validators.email]],
    date:             ['', Validators.required],
    
  });


  this.EditMemSettForm = this.formBuilder.group({
    allow_new_reg:              [''],
    mem_act:                    [''], 
    calender_edit:              [''],
    
  });


  this.LangSettForm = this.formBuilder.group({
    def_lang:               [''],
    oth_lang:               [''],  
  });


  this.LogoSettForm = this.formBuilder.group({
    site_logo:                [''],
    site_color:               [''],  
  });


  this.ContactInfoSettForm = this.formBuilder.group({
    phone:             ['', [Validators.required, Validators.minLength(9)]],
    email:            ['', [Validators.required, Validators.email]],
    
  });



  this.SocailNetSettForm = this.formBuilder.group({
    facebook:         ['', Validators.required],
    twitter:          ['', Validators.required],
    youtube:          ['', Validators.required],
    linked_in:        ['', Validators.required],
    instagram:        ['', Validators.required],
    snapchat:         ['', Validators.required],
    
  });


  }


  get f1() { return this.EditOptionForm.controls; }
  get f2() { return this.EditMemSettForm.controls; }
  get f3() { return this.LangSettForm.controls; }
  get f4() { return this.LogoSettForm.controls; }
  get f5() { return this.ContactInfoSettForm.controls; }
  get f6() { return this.SocailNetSettForm.controls; }




  onSubmitEO() {
    this.EOsubmitted = true;

    // stop here if form is invalid
    if (this.EditOptionForm.invalid) {
        return;
    }

    this.apiService.SitOptEditOptRequest(this.EditOptionForm.value)
        .pipe(first())
        .subscribe(
            data => {
              alert("customer added");
               
            },
            error => {
                
            } 
        );
  }


  onSubmitEM() {
    this.EMsubmitted = true;

    // stop here if form is invalid
    if (this.EditMemSettForm.invalid) {
        return;
    }

    this.apiService.SiteOptMemSettRequest(this.EditMemSettForm.value)
        .pipe(first())
        .subscribe(
            data => {
              alert("customer added");
               
            },
            error => {
                
            } 
        );
  }


  onSubmitLS() {
    this.LSsubmitted = true;

    // stop here if form is invalid
    if (this.LangSettForm.invalid) {
        return;
    }

    this.apiService.SiteOptLangSettRequest(this.LangSettForm.value)
        .pipe(first())
        .subscribe(
            data => {
              alert("customer added");
               
            },
            error => {
                
            } 
        );
  }


  onSubmitSL() {
    this.SLsubmitted = true;

    // stop here if form is invalid
    if (this.LogoSettForm.invalid) {
        return;
    }

    this.apiService.SiteOptLogoSettRequest(this.LogoSettForm.value)
        .pipe(first())
        .subscribe(
            data => {
              alert("customer added");
               
            },
            error => {
                
            } 
        );
  }



  onSubmitCI() {
    this.CIsubmitted = true;

    // stop here if form is invalid
    if (this.ContactInfoSettForm.invalid) {
        return;
    }

    this.apiService.SiteOptContSettRequest(this.ContactInfoSettForm.value)
        .pipe(first())
        .subscribe(
            data => {
              alert("customer added");
               
            },
            error => {
                
            } 
        );
  }



  onSubmitSN() {
    this.SNsubmitted = true;

    // stop here if form is invalid
    if (this.SocailNetSettForm.invalid) {
        return;
    }

    this.apiService.SiteOptSocailSettRequest(this.SocailNetSettForm.value)
        .pipe(first())
        .subscribe(
            data => {
              alert("customer added");
               
            },
            error => {
                
            } 
        );
  }



  
 

}
