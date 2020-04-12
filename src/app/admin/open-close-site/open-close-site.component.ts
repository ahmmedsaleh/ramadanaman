import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api-service/api.service';
import { OpenCloseSite } from 'src/app//_models/crud-class/policy';

@Component({
  selector: 'app-open-close-site',
  templateUrl: './open-close-site.component.html',
  styleUrls: ['./open-close-site.component.scss']
})
export class OpenCloseSiteComponent implements OnInit {




  Result:  OpenCloseSite[];
  OpenCloseSite : OpenCloseSite = {Status : null, MessageEn : null, MessageAr : null};

  
//to get the value of radio button for status
radioSiteStatusChangeHandeler(event:any){
  this.OpenCloseSite.Status = event.target.value;
}



  //send Search data as object
  SendSearchDate(form){
    this.apiService.OpenCloseSiteRequest(form.value).subscribe((policy: OpenCloseSite)=>{
      console.log("Policy created, ", policy);
    });
  }


  ///test function
  showww(){
    console.log(this.OpenCloseSite);
   
  }



  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

}
