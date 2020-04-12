




import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend











import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// services
import { UserService } from './_services/user.service';
import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'; 
import { routing} from './router/router';

import { FormsModule} from '@angular/forms';







import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { BreadcrumbsComponent } from './admin/breadcrumbs/breadcrumbs.component';
import { TabsComponent } from './admin/dashboard/tabs/tabs.component';
import { GmapComponent } from './admin/dashboard/gmap/gmap.component';
import { ChartComponent } from './admin/dashboard/chart/chart.component';
import { VolunteersReportComponent } from './admin/volunteers-report/volunteers-report.component';
import { volSearchComponent } from './admin/volunteers-report/volSearch/volsearch.component';
import { AttendanceComponent } from './admin/attendance/attendance.component';
import { attSearchComponent } from './admin/attendance/attSearch/attsearch.component';
import { EditAttendanceComponent } from './admin/edit-attendance/edit-attendance.component';
import { CountriesCitiesComponent } from './admin/countries-cities/countries-cities.component';
import { EditCountryCityComponent } from './admin/edit-country-city/edit-country-city.component';
import { WorkPlacesComponent } from './admin/work-places/work-places.component';
import { WPsearchComponent } from './admin/work-places/wpsearch/wpsearch.component';
import { AddCountryCityComponent } from './admin/add-country-city/add-country-city.component';
import { AddNewLocationComponent } from './admin/add-new-location/add-new-location.component';
import { EditWorkplacesComponent } from './admin/edit-workplaces/edit-workplaces.component';
import { MembersVolunteersComponent } from './admin/members-volunteers/members-volunteers.component';
import { MemSearchComponent } from './admin/members-volunteers/mem-search/mem-search.component';
import { RateComponent } from './admin/rate/rate.component';
import { EditMembersVolunteersComponent } from './admin/edit-members-volunteers/edit-members-volunteers.component';
import { ViewRateComponent } from './admin/view-rate/view-rate.component';
import { ViewSearchComponent } from './admin/view-rate/view-search/view-search.component';
//for pagination
import {NgxPaginationModule} from 'ngx-pagination';
import { CountryNotesComponent } from './admin/country-notes/country-notes.component';
import { SitesSupervisorsComponent } from './admin/sites-supervisors/sites-supervisors.component';
import { SupSearchComponent } from './admin/sites-supervisors/sup-search/sup-search.component';
import { SupWorkPlaceComponent } from './admin/sup-work-place/sup-work-place.component';
import { VolunteersNotesComponent } from './admin/volunteers-notes/volunteers-notes.component';
import { VolNSearchComponent } from './admin/volunteers-notes/vol-n-search/vol-n-search.component';
import { CitySupervisorsComponent } from './admin/city-supervisors/city-supervisors.component';
import { AddCitySupervisorsComponent } from './admin/add-city-supervisors/add-city-supervisors.component';
import { EditCitySupervisorsComponent } from './admin/edit-city-supervisors/edit-city-supervisors.component';
import { CountrySupervisorsComponent } from './admin/country-supervisors/country-supervisors.component';
import { AddCountrySupervisorsComponent } from './admin/add-country-supervisors/add-country-supervisors.component';
import { EditCountrySupervisorsComponent } from './admin/edit-country-supervisors/edit-country-supervisors.component';
import { GeneralReportComponent } from './admin/general-report/general-report.component';
import { VolunteersCounterComponent } from './admin/volunteers-counter/volunteers-counter.component';
import { VolCounSearchComponent } from './admin/volunteers-counter/vol-coun-search/vol-coun-search.component';
import { AttendanceByPlaceComponent } from './admin/attendance-by-place/attendance-by-place.component';
import { AttPalceSearchComponent } from './admin/attendance-by-place/att-palce-search/att-palce-search.component';
import { AttendanceByPersonComponent } from './admin/attendance-by-person/attendance-by-person.component';
import { AttPersonSearchComponent } from './admin/attendance-by-person/att-person-search/att-person-search.component';
import { EventLogComponent } from './admin/event-log/event-log.component';
import { EventLogSearchComponent } from './admin/event-log/event-log-search/event-log-search.component';
import { SiteVisitorsComponent } from './admin/site-visitors/site-visitors.component';
import { SiteVistorsSearchComponent } from './admin/site-visitors/site-vistors-search/site-vistors-search.component';
import { OfficialAgenciesComponent } from './admin/official-agencies/official-agencies.component';
import { OaSearchComponent } from './admin/official-agencies/oa-search/oa-search.component';
import { AddOfficialAgenciesComponent } from './admin/add-official-agencies/add-official-agencies.component';
import { EditOfficialAgenciesComponent } from './admin/edit-official-agencies/edit-official-agencies.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { AddCustomersComponent } from './admin/add-customers/add-customers.component';
import { EditCustomersComponent } from './admin/edit-customers/edit-customers.component';
import { AdsBanarsComponent } from './admin/ads-banars/ads-banars.component';
import { AddAdsBanarsComponent } from './admin/add-ads-banars/add-ads-banars.component';
import { EditAdsBanarsComponent } from './admin/edit-ads-banars/edit-ads-banars.component';
import { ReceivedMessagesComponent } from './admin/received-messages/received-messages.component';
import { HomeComponent } from './user/home/home.component';
import { AboutComponent } from './user/about/about.component';
import { UpperbarComponent } from './user/upperbar/upperbar.component';
import { UNavbarComponent } from './user/u-navbar/u-navbar.component';
import { FooterComponent } from './user/footer/footer.component';
import { UCopyrightComponent } from './user/u-copyright/u-copyright.component';
import { IntroComponent } from './user/intro/intro.component';
import { ProfileComponent } from './user/profile/profile.component';
import { MyProfileComponent } from './user/my-profile/my-profile.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditMyProfileComponent } from './user/edit-my-profile/edit-my-profile.component';
import { MainSitePagesComponent } from './admin/main-site-pages/main-site-pages.component';
import { EditHomeComponent } from './admin/edit-home/edit-home.component';
import { EditAboutComponent } from './admin/edit-about/edit-about.component';
import { EditTermsComponent } from './admin/edit-terms/edit-terms.component';
import { SiteOptionsComponent } from './admin/site-options/site-options.component';
import { OpenCloseSiteComponent } from './admin/open-close-site/open-close-site.component';
import { BackupComponent } from './admin/backup/backup.component';
import { UserPrivilegesComponent } from './admin/user-privileges/user-privileges.component';
import { AddNewUserComponent } from './admin/add-new-user/add-new-user.component';
import { EditAdminsUserComponent } from './admin/edit-admins-user/edit-admins-user.component';
import { AdminMyProfileComponent } from './admin/admin-my-profile/admin-my-profile.component';
import { EditSiteSupervisorComponent } from './admin/edit-site-supervisor/edit-site-supervisor.component';
import { RatingComponent } from './user/my-profile/rating/rating.component';
import { ApiService } from './_services/api-service/api.service';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    BreadcrumbsComponent,
    TabsComponent,
    GmapComponent,
    ChartComponent,
    VolunteersReportComponent,
    volSearchComponent,
    AttendanceComponent,
    attSearchComponent,
    EditAttendanceComponent,
    CountriesCitiesComponent,
    EditCountryCityComponent,
    WorkPlacesComponent,
    WPsearchComponent,
    AddCountryCityComponent,
    AddNewLocationComponent,
    EditWorkplacesComponent,
    MembersVolunteersComponent,
    MemSearchComponent,
    RateComponent,
    EditMembersVolunteersComponent,
    ViewRateComponent,
    ViewSearchComponent,
    CountryNotesComponent,
    SitesSupervisorsComponent,
    SupSearchComponent,
    SupWorkPlaceComponent,
    VolunteersNotesComponent,
    VolNSearchComponent,
    CitySupervisorsComponent,
    AddCitySupervisorsComponent,
    EditCitySupervisorsComponent,
    CountrySupervisorsComponent,
    AddCountrySupervisorsComponent,
    EditCountrySupervisorsComponent,
    GeneralReportComponent,
    VolunteersCounterComponent,
    VolCounSearchComponent,
    AttendanceByPlaceComponent,
    AttPalceSearchComponent,
    AttendanceByPersonComponent,
    AttPersonSearchComponent,
    EventLogComponent,
    EventLogSearchComponent,
    SiteVisitorsComponent,
    SiteVistorsSearchComponent,
    OfficialAgenciesComponent,
    OaSearchComponent,
    AddOfficialAgenciesComponent,
    EditOfficialAgenciesComponent,
    CustomersComponent,
    AddCustomersComponent,
    EditCustomersComponent,
    AdsBanarsComponent,
    AddAdsBanarsComponent,
    EditAdsBanarsComponent,
    ReceivedMessagesComponent,
    HomeComponent,
    AboutComponent,
    UpperbarComponent,
    UNavbarComponent,
    FooterComponent,
    UCopyrightComponent,
    IntroComponent,
    ProfileComponent,
    MyProfileComponent,
    EditUserComponent,
    AddUserComponent,
    EditMyProfileComponent,
    MainSitePagesComponent,
    EditHomeComponent,
    EditAboutComponent,
    EditTermsComponent,
    SiteOptionsComponent,
    OpenCloseSiteComponent,
    BackupComponent,
    UserPrivilegesComponent,
    AddNewUserComponent,
    EditAdminsUserComponent,
    AdminMyProfileComponent,
    EditSiteSupervisorComponent,
    RatingComponent,
    AlertComponent
   
    
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    routing
  ],
  providers: [
     ApiService,
   
   { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
   { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
