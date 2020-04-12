import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbsanceVal } from 'src/app//_models/crud-class/policy';
import { ApiService } from 'src/app/_services/api-service/api.service';


@Component({
  selector: 'app-edit-attendance',
  templateUrl: './edit-attendance.component.html',
  styleUrls: ['./edit-attendance.component.scss']
})
export class EditAttendanceComponent implements OnInit {

  //to get the value of radio button
  radioChangeHandeler(event:any){
    this.AbsanceValue.Status = event.target.value;
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router, private apiService: ApiService) {
     
   }

  Result:  AbsanceVal[];
  AbsanceValue : AbsanceVal = {ID : null, Status : null}


  ///test function
  showww(){
    console.log(this.AbsanceValue);
   
  }

  //send Search data as object
  SendSearchDate(form){
    this.apiService.AbsanceRequest(form.value).subscribe((policy: AbsanceVal)=>{
      console.log("Policy created, ", policy);
    });
  }

  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/Attendance']);
  
  }

  ngOnInit(): void {
  }

}
