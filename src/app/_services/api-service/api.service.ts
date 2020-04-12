import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signup, AdminLogin, VolSearch, CountO, AbsanceVal, AddCountryCity, CountryNotes, AddEditLocation, EditMemVol, AddEditCitySupervisor, AddEditCountrySupervisor, EditHomePage, EditAboutPage, EditTerms, AddEditAgancy, AddEditCustomer, SiteOptEditOpt, SiteOptMemSett, SiteOptLangSett, SiteOptLogoSett, SiteOptContSett, SiteOptSocialSett, AddNewUser, OpenCloseSite, UserLogin, EditMyProfile, UserRating, EditAddMyVol, RegDay, UserNote, EditCountryCity } from  '../../_models/crud-class/policy';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = 'http://ramadan.talentohr.net';

  token:string;


  fetch() {
    return this.httpClient.get("https:/jsonplaceholder.typicode.com/todos/1");
  }









  readPolicies(): Observable<Signup[]>{
    return this.httpClient.get<Signup[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }


  createPolicy(policy: Signup): Observable<Signup>{
    return this.httpClient.post<Signup>(`${this.PHP_API_SERVER}/api/create.php`, policy);
  }



  updatePolicy(policy: Signup){
    return this.httpClient.put<Signup>(`${this.PHP_API_SERVER}/api/update.php`, policy);   
  }



  deletePolicy(id: number){
    return this.httpClient.delete<Signup>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
  }

/////////////////////////////////////* start user pages *///////////////////////////////////////////////////////

/////////for users Signup
SignUpRequest(policy: Signup): Observable<Signup>{
  return this.httpClient.post<Signup>(`${this.PHP_API_SERVER}/api/create.php`, policy);
}

/////////for users login
UserLoginRequest(policy: UserLogin): Observable<UserLogin>{
  return this.httpClient.post<UserLogin>(`${this.PHP_API_SERVER}/api/create.php`, policy);
}



/////////for users Edit My Profile
UserEditProfileRequest(policy: EditMyProfile): Observable<EditMyProfile>{
  return this.httpClient.post<EditMyProfile>(`${this.PHP_API_SERVER}/api/create.php`, policy);
}


/////////for users Edit My Profile
UserRatingRequest(policy: UserRating): Observable<UserRating>{
  return this.httpClient.post<UserRating>(`${this.PHP_API_SERVER}/api/create.php`, policy);
}



/////////for users Edit My Volunteers
UserEditMyVolRequest(policy: EditAddMyVol): Observable<EditAddMyVol>{
  return this.httpClient.post<EditAddMyVol>(`${this.PHP_API_SERVER}/api/create.php`, policy);
}


/////////for users Registered Day
UserRegDayRequest(policy: RegDay): Observable<RegDay>{
  return this.httpClient.post<RegDay>(`${this.PHP_API_SERVER}/api/create.php`, policy);
}


/////////for users Notes
UserNotesRequest(policy: UserNote): Observable<UserNote>{
  return this.httpClient.post<UserNote>(`${this.PHP_API_SERVER}/api/create.php`, policy);
}





////////////////////////////////////////* end User Pages *//////////////////////////////////////////////////////

  /////////for admin login
  LoginRequest(policy: AdminLogin): Observable<AdminLogin>{
    return this.httpClient.post<AdminLogin>(`${this.PHP_API_SERVER}/api/login`, policy);
  }

  
   /////////volunteer search
   VolSearchRequest(policy: VolSearch): Observable<VolSearch>{
    return this.httpClient.post<VolSearch>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }






  ///read countries object
  readCountriesO(): Observable<any>{
    return this.httpClient.get<any>(`${this.PHP_API_SERVER}/api/get-countries`);
  }


  /////////Absance Status 
  AbsanceRequest(policy: AbsanceVal): Observable<AbsanceVal>{
    return this.httpClient.post<AbsanceVal>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }


   











/********************************************** countries & cities ******************************************/
  ///read countries object
  GetCounRequest(): Observable<object>{
    return this.httpClient.get(`${this.PHP_API_SERVER}/api/get-countries`);

  }


  ///read cities object
  GetCitiesRequest(countid:number): Observable<object>{
    return this.httpClient.get(`${this.PHP_API_SERVER}/api/get-cities/${countid}`);

  }


  /********************************************** countries & cities ******************************************/
 

  /// get places request
  GetPlacesRequest(): Observable<object>{
    return this.httpClient.get(`${this.PHP_API_SERVER}/api/get-places`);
  }


  /// get places by city id request
  GetPlacesByCityIdRequest(id : number): Observable<object>{
    return this.httpClient.get(`${this.PHP_API_SERVER}/api/get-city-places/${id}`);
  }
















  /////////Add Country And City
  AddCountryCity(policy: AddCountryCity): Observable<AddCountryCity>{
    return this.httpClient.post<AddCountryCity>(`${this.PHP_API_SERVER}/api/add-country-or-city`, policy);
  }



  /////////Edit Country
  EditCountry(policy: EditCountryCity): Observable<EditCountryCity>{
    return this.httpClient.post<EditCountryCity>(`${this.PHP_API_SERVER}/api/edit-country/${policy.id}`, policy);
  }

  /////////Edit Country
  EditCity(policy: EditCountryCity): Observable<EditCountryCity>{
    return this.httpClient.post<EditCountryCity>(`${this.PHP_API_SERVER}/api/edit-city/${policy.id}`, policy);
  }


  /////////Delete Country
  DeleteCountry(id: number){
  return this.httpClient.delete(`${this.PHP_API_SERVER}/api/delete-country/${id}`);
  }


  /////////Delete City
  DeleteCity(id: number){
    return this.httpClient.delete(`${this.PHP_API_SERVER}/api/delete-city/${id}`);
  }


  /////////Change country Status
  ChangeCountryStatusRequest(id: number){
    return this.httpClient.post(`${this.PHP_API_SERVER}/api/country-change-status/${id}`,id);
  }

  /////////Change country Status
  ChangeCityStatusRequest(id: number){
    return this.httpClient.post(`${this.PHP_API_SERVER}/api/city-change-status/${id}`,id);
  }






  /////////Country Notes
  CountryNotesRequest(policy: CountryNotes): Observable<CountryNotes>{
    return this.httpClient.post<CountryNotes>(`${this.PHP_API_SERVER}/api/add-country-note`, policy);
  }






  ///////// add location
  AddLocationRequest(policy: AddEditLocation): Observable<AddEditLocation>{
    return this.httpClient.post<AddEditLocation>(`${this.PHP_API_SERVER}/api/add-place`, policy);
  }


  ///////// Edit location
  EditLocationRequest(policy: AddEditLocation): Observable<AddEditLocation>{
    return this.httpClient.post<AddEditLocation>(`${this.PHP_API_SERVER}/api/edit-place/${policy.id}`, policy);
  }


  /////////Delete Place
  DeletePlaceRequest(id: number){
    return this.httpClient.delete(`${this.PHP_API_SERVER}/api/delete-place/${id}`);
  }


  /////////Change Place Status
  ChangePlaceStatusRequest(id: number){
    return this.httpClient.post(`${this.PHP_API_SERVER}/api/place-change-status/${id}`,id);
  }




  /// get Members request
  GetMembersRequest(): Observable<object>{
    return this.httpClient.get(`${this.PHP_API_SERVER}/api/get-places`);
  }


  ///////// Edit Member
  EditMemberRequest(policy: EditMemVol): Observable<EditMemVol>{
    return this.httpClient.post<EditMemVol>(`${this.PHP_API_SERVER}/api/edit-member/${policy.id}`, policy);
  }


  /////////Delete Member
  DeleteMemberRequest(id: number){
    return this.httpClient.delete(`${this.PHP_API_SERVER}/api/delete-member/${id}`);
  }


   /////////Change city supervisor Status
   ChangeMemberStatusRequest(id: number){
    return this.httpClient.post(`${this.PHP_API_SERVER}/api/place-change-status/${id}`,id);
  }


  /// get Site Supervisor request
  GetSiteSupRequest(): Observable<object>{
    return this.httpClient.get(`${this.PHP_API_SERVER}/api/get-places`);
  }


  ///////// Edit Member
  EditSiteSupRequest(policy: EditMemVol): Observable<EditMemVol>{
    return this.httpClient.post<EditMemVol>(`${this.PHP_API_SERVER}/api/edit-member/${policy.id}`, policy);
  }



  /// get volunteers notes request
  GetVolNotesRequest(): Observable<object>{
    return this.httpClient.get(`${this.PHP_API_SERVER}/api/get-places`);
  }



  /// get city supervisor request
  GetCitySupRequest(): Observable<object>{
    return this.httpClient.get(`${this.PHP_API_SERVER}/api/get-places`);
  }



  ///////// add city supervisor
  AddCitySupRequest(policy: AddEditCitySupervisor): Observable<AddEditCitySupervisor>{
    return this.httpClient.post<AddEditCitySupervisor>(`${this.PHP_API_SERVER}/api/add-place`, policy);
  }


   ///////// Edit Member
   EditCitySupRequest(policy: AddEditCitySupervisor): Observable<AddEditCitySupervisor>{
    return this.httpClient.post<AddEditCitySupervisor>(`${this.PHP_API_SERVER}/api/edit-member/${policy.id}`, policy);
  }


   /////////Delete city supervisor
   DeleteCitySupRequest(id: number){
    return this.httpClient.delete(`${this.PHP_API_SERVER}/api/delete-member/${id}`);
  }


  /////////Change city supervisor Status
  ChangeCitySupStatusRequest(id: number){
    return this.httpClient.post(`${this.PHP_API_SERVER}/api/place-change-status/${id}`,id);
  }



  /// get city supervisor request
  GetCountSupRequest(id : number): Observable<object>{
    return this.httpClient.get(`${this.PHP_API_SERVER}/api/get-all-country-supervisors/${id}`);
  }


  ///////// add Country supervisor
  AddCountrySupRequest(policy: AddEditCountrySupervisor): Observable<AddEditCountrySupervisor>{
    return this.httpClient.post<AddEditCountrySupervisor>(`${this.PHP_API_SERVER}/api/add-country-supervisor`, policy);
  }



  ///////// Edit Country supervisor
  EditCountSupRequest(policy: AddEditCitySupervisor): Observable<AddEditCitySupervisor>{
    return this.httpClient.post<AddEditCitySupervisor>(`${this.PHP_API_SERVER}/api/edit-member/${policy.id}`, policy);
  }


  /////////Delete Country supervisor
  DeleteCountSupRequest(id: number){
    return this.httpClient.delete(`${this.PHP_API_SERVER}/api/delete-member/${id}`);
  }


  /////////Change Country supervisor
  ChangeCountSupStatusRequest(id: number){
    return this.httpClient.post(`${this.PHP_API_SERVER}/api/place-change-status/${id}`,id);
  }



  /// get Volunteers Counter request
  GetVolCountRequest(): Observable<object>{
    return this.httpClient.get(`${this.PHP_API_SERVER}/api/get-places`);
  }


   /// get attendance by place request
   GetAttByPlaceRequest(): Observable<object>{
    return this.httpClient.get(`${this.PHP_API_SERVER}/api/get-places`);
  }



  /// get attendance by person request
  GetAttByPersonRequest(): Observable<object>{
    return this.httpClient.get(`${this.PHP_API_SERVER}/api/get-places`);
  }


   /// get Event Logs request
   GetEventLogsRequest(): Observable<object>{
    return this.httpClient.get(`${this.PHP_API_SERVER}/api/get-places`);
  }


  /// get vistors request
  GetVistorsRequest(): Observable<object>{
    return this.httpClient.get(`${this.PHP_API_SERVER}/api/get-places`);
  }


   /// get Site Pages request
   GetSitePagesRequest(): Observable<object>{
    return this.httpClient.get(`${this.PHP_API_SERVER}/api/get-places`);
  }


   /////////  edit Home Page
   EditHomePageRequest(policy: EditHomePage): Observable<EditHomePage>{
    return this.httpClient.post<EditHomePage>(`${this.PHP_API_SERVER}/api/get-places`, policy);
  }


   ///////// edit About Page
   EditAboutPageRequest(policy: EditAboutPage): Observable<EditAboutPage>{
    return this.httpClient.post<EditAboutPage>(`${this.PHP_API_SERVER}/api/get-places`, policy);
  }


  ///////// Edit Terms
  EditTermsRequest(policy: EditTerms): Observable<EditTerms>{
    return this.httpClient.post<EditTerms>(`${this.PHP_API_SERVER}/api/get-places`, policy);
  }



  /// get vistors request
  GetAganciesRequest(): Observable<object>{
    return this.httpClient.get(`${this.PHP_API_SERVER}/api/get-places`);
  }


  /////////Add Agancy
  AddAgancyRequest(policy: AddEditAgancy): Observable<AddEditAgancy>{
    return this.httpClient.post<AddEditAgancy>(`${this.PHP_API_SERVER}/api/add-place`, policy);
  }


   /////////Edit Agancy
   EditAgancyRequest(policy: AddEditAgancy): Observable<AddEditAgancy>{
    return this.httpClient.post<AddEditAgancy>(`${this.PHP_API_SERVER}/api/add-place/${policy.id}`, policy);
  }


  /////////Delete city supervisor
  DeleteAgancyRequest(id: number){
    return this.httpClient.delete(`${this.PHP_API_SERVER}/api/delete-member/${id}`);
  }

  /////////Change city supervisor Status
  ChangeAgancyStatusRequest(id: number){
    return this.httpClient.post(`${this.PHP_API_SERVER}/api/place-change-status/${id}`,id);
  }



  /// get customer request
  GetCustomersRequest(): Observable<object>{
    return this.httpClient.get(`${this.PHP_API_SERVER}/api/get-places`);
  }


  /////////Add customer
  AddCustomerRequest(policy: AddEditAgancy): Observable<AddEditAgancy>{
    return this.httpClient.post<AddEditAgancy>(`${this.PHP_API_SERVER}/api/add-place`, policy);
  }


   /////////Edit customer
   EditCustomerRequest(policy: AddEditAgancy): Observable<AddEditAgancy>{
    return this.httpClient.post<AddEditAgancy>(`${this.PHP_API_SERVER}/api/add-place/${policy.id}`, policy);
  }


  /////////Delete city customer
  DeleteCustomerRequest(id: number){
    return this.httpClient.delete(`${this.PHP_API_SERVER}/api/delete-member/${id}`);
  }

  /////////Change customer Status
  ChangeCustomerStatusRequest(id: number){
    return this.httpClient.post(`${this.PHP_API_SERVER}/api/place-change-status/${id}`,id);
  }



   /////////site option Edit option
   SitOptEditOptRequest(policy: SiteOptEditOpt): Observable<SiteOptEditOpt>{
    return this.httpClient.post<SiteOptEditOpt>(`${this.PHP_API_SERVER}/api/add-place`, policy);
  }



  /////////Site Option Member Settings
  SiteOptMemSettRequest(policy: SiteOptMemSett): Observable<SiteOptMemSett>{
    return this.httpClient.post<SiteOptMemSett>(`${this.PHP_API_SERVER}/api/add-place`, policy);
  }



  /////////Site Options Language Settings
  SiteOptLangSettRequest(policy: SiteOptLangSett): Observable<SiteOptLangSett>{
    return this.httpClient.post<SiteOptLangSett>(`${this.PHP_API_SERVER}/api/add-place`, policy);
  }




  /////////Site Options Logo Settings
  SiteOptLogoSettRequest(policy: SiteOptLogoSett): Observable<SiteOptLogoSett>{
    return this.httpClient.post<SiteOptLogoSett>(`${this.PHP_API_SERVER}/api/add-place`, policy);
  }




  ///////// Site Options Contact Us Settings
  SiteOptContSettRequest(policy: SiteOptContSett): Observable<SiteOptContSett>{
    return this.httpClient.post<SiteOptContSett>(`${this.PHP_API_SERVER}/api/add-place`, policy);
  }



  ///////// Site Options Socail Link Settings
  SiteOptSocailSettRequest(policy: SiteOptSocialSett): Observable<SiteOptSocialSett>{
    return this.httpClient.post<SiteOptSocialSett>(`${this.PHP_API_SERVER}/api/add-place`, policy);
  }


















  


















  

  


  
 

  

  


  


  /////////Add Edit Customer
  AddEditCustomerRequest(policy: AddEditCustomer): Observable<AddEditCustomer>{
    return this.httpClient.post<AddEditCustomer>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }


 


  ///////// Add New User
  AddNewUserRequest(policy: AddNewUser): Observable<AddNewUser>{
    return this.httpClient.post<AddNewUser>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }


  ///////// Open Close Site
  OpenCloseSiteRequest(policy: OpenCloseSite): Observable<OpenCloseSite>{
    return this.httpClient.post<OpenCloseSite>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }





  constructor(private httpClient: HttpClient) {}
}