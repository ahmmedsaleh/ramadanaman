
import { ActivatedRoute, Router } from '@angular/router';
import { AddNewUser } from 'src/app//_models/crud-class/policy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../_services';



@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit, OnDestroy {

   //varaible to recive countries
   currentUser: any;
   currentUserSubscription: Subscription;
   RuturnedCount : any;
   Countries = [];


  Result:  AddNewUser[];
  AddNewUser : AddNewUser = {Username : null, Password : null, FullName : null, Email : null, Type : null, Country : null};







//aray of user types
UsersTypes = [
  {id: 1, name: "Site Manager"},
  {id: 2, name: "Country Supervisor"},
  {id: 3, name: "City Supervisor"}

]



  //send Search data as object
  SendSearchDate(form){
    this.apiService.AddNewUserRequest(form.value).subscribe((policy: AddNewUser)=>{
      console.log("Policy created, ", policy);
    });
  }


  ///test function
  showww(){
    console.log(this.AddNewUser);
   
  }



  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/UserPrivileges'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router, private apiService: ApiService,
    private authenticationService: AuthenticationService ) { 
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

}
