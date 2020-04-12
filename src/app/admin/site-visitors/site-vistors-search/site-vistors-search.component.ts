import { Component, OnInit } from '@angular/core';
import { VolSearch } from 'src/app//_models/crud-class/policy';
import { ApiService } from 'src/app/_services/api-service/api.service';

@Component({
  selector: 'app-site-vistors-search',
  templateUrl: './site-vistors-search.component.html',
  styleUrls: ['./site-vistors-search.component.scss']
})
export class SiteVistorsSearchComponent implements OnInit {

  Result:  VolSearch[];
SitVisSearchResult : VolSearch = {Phone : null, Name : null, Gov : null, Day : null, Country : null, City : null, Place : null, Date: null};

///test function
showww(){
  console.log(this.SitVisSearchResult);
}

//send Search data as object
SendSearchDate(form){
  this.apiService.VolSearchRequest(form.value).subscribe((policy: VolSearch)=>{
    console.log("Policy created, ", policy);
  });
}

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

}
