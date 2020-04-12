import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/_services/api-service/api.service';
import { EditMyProfile } from 'src/app/_models/crud-class/policy';
declare var $ :any;

@Component({
  selector: 'app-edit-my-profile',
  templateUrl: './edit-my-profile.component.html',
  styleUrls: ['./edit-my-profile.component.scss']
})
export class EditMyProfileComponent implements OnInit {


  Result:  EditMyProfile[];
  EditMyProfile : EditMyProfile = {Id : null, StNameEn : null, EdNameEn : null, RdNameEn : null, ThameEn : null,  StNameAr : null, EdNameAr : null, RdNameAr : null, ThameAr : null, Email : null,   Password : null, Phone : null, BirthDate : null, Gender : null, Nationality : null};



  //to get the value of radio button for gender
  radioGenderChangeHandeler(event:any){
    this.EditMyProfile.Gender = event.target.value;
  }


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


  //send Search data as object
  SendSearchDate(form){
    this.apiService.UserEditProfileRequest(form.value).subscribe((policy: EditMyProfile)=>{
      console.log("Policy created, ", policy);
    });
  }


  ///test function
  showww(){
    console.log(this.EditMyProfile);
  }



  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/MyProfile'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router, private apiService: ApiService) { }

  ngOnInit(): void {
  }

}
