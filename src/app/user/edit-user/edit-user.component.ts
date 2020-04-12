import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditAddMyVol } from 'src/app/_models/crud-class/policy';
import { ApiService } from 'src/app/_services/api-service/api.service';
declare var $ :any;

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {


  Result:  EditAddMyVol[];
  EditMyVolunteers : EditAddMyVol = {Id : null, StNameEn : null, EdNameEn : null, RdNameEn : null, ThameEn : null,  StNameAr : null, EdNameAr : null, RdNameAr : null, ThameAr : null, BirthDate : null,  Phone : null,  Gender : null};



  //to get the value of radio button for gender
  radioGenderChangeHandeler(event:any){
    this.EditMyVolunteers.Gender = event.target.value;
  }


  //send Search data as object
  SendSearchDate(form){
    this.apiService.UserEditMyVolRequest(form.value).subscribe((policy: EditAddMyVol)=>{
      console.log("Policy created, ", policy);
    });
  }


  ///test function
  showww(){
    console.log(this.EditMyVolunteers);
  }




  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/MyProfile'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router, private apiService: ApiService) { }

  ngOnInit(): void {
  }

}
