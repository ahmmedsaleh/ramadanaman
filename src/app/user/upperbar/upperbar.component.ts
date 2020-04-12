import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api-service/api.service';
import { Signup, UserLogin } from 'src/app/_models/crud-class/policy';
declare var $ :any;


@Component({
  selector: 'app-upperbar',
  templateUrl: './upperbar.component.html',
  styleUrls: ['./upperbar.component.scss']
})
export class UpperbarComponent implements OnInit {

  // for sign up
  policies:  Signup[];
  SignupData:  Signup  = { id :  null , RegType: null, AgencyType: null, AcadimicId: null, StNameEn: null , EdNameEn:null, RdNameEn:null, ThameEn:null, StNameAr:null, EdNameAr:null, RdNameAr:null, ThameAr:null, BirthDate:null, Gender: null, Nationality: null, Country: null, City: null, NewsLetter : null,  Username:null, Phone:null, Email:null, Password:null, Terms: null};

 

  // for login
  policiess:  UserLogin[];
  LoginData:  UserLogin  = {Username : null, Password : null, Remember : null };






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



  //aray of Cities
Cities = [
  {id: 1, name: "Cities1"},
  {id: 2, name: "Cities2"},
  {id: 3, name: "Cities3"},
  {id: 4, name: "Cities4"},
  {id: 5, name: "Cities5"},
  {id: 6, name: "Cities6"},
  {id: 7, name: "Cities7"},
  {id: 8, name: "Cities8"},
  {id: 9, name: "Cities9"}

]


 //aray of Nationalities
 Nationalities = ["Egyption", "Engeland" , "American"];




 //to get the value of radio button for gender
 radioGenderChangeHandeler(event:any){
  this.SignupData.Gender = event.target.value;
}

//to get the value of check box for news letter
CheckNewsChangeHandeler(event:any){
  this.SignupData.NewsLetter = event.srcElement.checked;
}



//to get the value of check box for terms
CheckTermsChangeHandeler(event:any){
  this.SignupData.Terms = event.srcElement.checked;
}



//to get the value of check box for remember
CheckRememberChangeHandeler(event:any){
  this.LoginData.Remember = event.srcElement.checked;
}

 




  //send Search data as object
  SendSearchDate(form){
    this.apiService.SignUpRequest(form.value).subscribe((policy: Signup)=>{
      console.log("Policy created, ", policy);
    });
  }

  ///test function
  showww(){
    console.log(this.SignupData);
   
  }


  ///test function
  showwww(){
    console.log(this.LoginData);
   
  }





//for add new data in database or update data
  createOrUpdatePolicy(form){
    if(this.SignupData && this.SignupData.id){
      form.value.id = this.SignupData.id;
      this.apiService.updatePolicy(form.value).subscribe((policy: Signup)=>{
        console.log("Policy updated" , policy);
      });
    }
    else{

      this.apiService.createPolicy(form.value).subscribe((policy: Signup)=>{
        console.log("Policy created, ", policy);
      });
    }
    
  }

  selectPolicy(policy: Signup){
    this.SignupData = policy;
  }


//for delete data from database  
  deletePolicy(id){
    this.apiService.deletePolicy(id).subscribe((policy: Signup)=>{
      console.log("Policy deleted, ", policy);
    });
  }



  //show login and register
  showLogReg:boolean = true;

  //show loged in
  showLog:boolean = false;

  //to close signup form
  hideSignUp(){
    $(".close").parent(".signup-form").slideUp(300);
  }
  //to close signup form
   hideLogin(){
    $(".close").parent(".login-form").slideUp(300);
  }

  //to show login form
  showLoginForm(){
    $(".login-form").slideDown(500);
    $(".signup-form").slideUp(100);
  }

  //to show signup form
  showSignupForm(){
    $(".signup-form").slideDown(500);
    $(".login-form").slideUp(100);
  }

  //to show terms
  showTerms(){
    $(".terms-cond").slideDown(400);
  }

  //to hide terms
  hideTerms(){
    $(".terms-cond").slideUp(400);
  }

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {


  //for read data from database  
    this.apiService.readPolicies().subscribe((policies: Signup[])=>{
      this.policies = policies;
      console.log(this.policies);
    })
    



    //to hide placeholder on form focus
    $('[placeholder]').focusin(function () {
      $(this).attr('data-text', $(this).attr('placeholder'));
      $(this).attr('placeholder', '');
      }).blur(function () {
      $(this).attr('placeholder', $(this).attr('data-text'));
    });

    //to show agancies when choose orgnization
    $('select.regType').change(function(){
      var val = $(this).val();
      if(val === "orgnization"){
          $('.select-agency-group').fadeIn(400);
      }else 
          $('.select-agency-group').fadeOut(400);
    });

     //to show id when choose IT
     $('select.select-agency').change(function(){
       
      var vallll = $(this).val();
      console.log(vallll);
      if(vallll == "7: 7"){
          $('.acadimic-id').fadeIn(400);
          $('.acadimic-id').css("display","inline-block");
      }else 
          $('.acadimic-id').fadeOut(400); 
    });


    

  }

}
