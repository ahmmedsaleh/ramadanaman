import { Routes, RouterModule  } from '@angular/router';
import { LoginComponent } from '../admin/login/login.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { VolunteersReportComponent } from '../admin/volunteers-report/volunteers-report.component';
import { AttendanceComponent } from '../admin/attendance/attendance.component';
import { EditAttendanceComponent } from '../admin/edit-attendance/edit-attendance.component';
import { CountriesCitiesComponent } from '../admin/countries-cities/countries-cities.component';
import { EditCountryCityComponent } from '../admin/edit-country-city/edit-country-city.component';
import { WorkPlacesComponent } from '../admin/work-places/work-places.component';
import { AddCountryCityComponent } from '../admin/add-country-city/add-country-city.component';
import { AddNewLocationComponent } from '../admin/add-new-location/add-new-location.component';
import { EditWorkplacesComponent } from '../admin/edit-workplaces/edit-workplaces.component';
import { MembersVolunteersComponent } from '../admin/members-volunteers/members-volunteers.component';
import { RateComponent } from '../admin/rate/rate.component';
import { EditMembersVolunteersComponent } from '../admin/edit-members-volunteers/edit-members-volunteers.component';
import { ViewRateComponent } from '../admin/view-rate/view-rate.component';
import { CountryNotesComponent } from '../admin/country-notes/country-notes.component';
import { SitesSupervisorsComponent } from '../admin/sites-supervisors/sites-supervisors.component';
import { SupWorkPlaceComponent } from '../admin/sup-work-place/sup-work-place.component';
import { VolunteersNotesComponent } from '../admin/volunteers-notes/volunteers-notes.component';
import { CitySupervisorsComponent } from '../admin/city-supervisors/city-supervisors.component';
import { AddCitySupervisorsComponent } from '../admin/add-city-supervisors/add-city-supervisors.component';
import { EditCitySupervisorsComponent } from '../admin/edit-city-supervisors/edit-city-supervisors.component';
import { CountrySupervisorsComponent } from '../admin/country-supervisors/country-supervisors.component';
import { AddCountrySupervisorsComponent } from '../admin/add-country-supervisors/add-country-supervisors.component';
import { EditCountrySupervisorsComponent } from '../admin/edit-country-supervisors/edit-country-supervisors.component';
import { GeneralReportComponent } from '../admin/general-report/general-report.component';
import { VolunteersCounterComponent } from '../admin/volunteers-counter/volunteers-counter.component';
import { AttendanceByPlaceComponent } from '../admin/attendance-by-place/attendance-by-place.component';
import { AttendanceByPersonComponent } from '../admin/attendance-by-person/attendance-by-person.component';
import { EventLogComponent } from '../admin/event-log/event-log.component';
import { SiteVisitorsComponent } from '../admin/site-visitors/site-visitors.component';
import { OfficialAgenciesComponent } from '../admin/official-agencies/official-agencies.component';
import { AddOfficialAgenciesComponent } from '../admin/add-official-agencies/add-official-agencies.component';
import { EditOfficialAgenciesComponent } from '../admin/edit-official-agencies/edit-official-agencies.component';
import { CustomersComponent } from '../admin/customers/customers.component';
import { AddCustomersComponent } from '../admin/add-customers/add-customers.component';
import { EditCustomersComponent } from '../admin/edit-customers/edit-customers.component';
import { AdsBanarsComponent } from '../admin/ads-banars/ads-banars.component';
import { AddAdsBanarsComponent } from '../admin/add-ads-banars/add-ads-banars.component';
import { EditAdsBanarsComponent } from '../admin/edit-ads-banars/edit-ads-banars.component';
import { ReceivedMessagesComponent } from '../admin/received-messages/received-messages.component';
import { HomeComponent } from '../user/home/home.component';
import { AboutComponent } from '../user/about/about.component';
import { IntroComponent } from '../user/intro/intro.component';
import { ProfileComponent } from '../user/profile/profile.component';
import { MyProfileComponent } from '../user/my-profile/my-profile.component';
import { AddUserComponent } from '../user/add-user/add-user.component';
import { EditUserComponent } from '../user/edit-user/edit-user.component';
import { EditMyProfileComponent } from '../user/edit-my-profile/edit-my-profile.component';
import { MainSitePagesComponent } from '../admin/main-site-pages/main-site-pages.component';
import { EditHomeComponent } from '../admin/edit-home/edit-home.component';
import { EditAboutComponent } from '../admin/edit-about/edit-about.component';
import { EditTermsComponent } from '../admin/edit-terms/edit-terms.component';
import { SiteOptionsComponent } from '../admin/site-options/site-options.component';
import { OpenCloseSiteComponent } from '../admin/open-close-site/open-close-site.component';
import { BackupComponent } from '../admin/backup/backup.component';
import { UserPrivilegesComponent } from '../admin/user-privileges/user-privileges.component';
import { AddNewUserComponent } from '../admin/add-new-user/add-new-user.component';
import { EditAdminsUserComponent } from '../admin/edit-admins-user/edit-admins-user.component';
import { AdminMyProfileComponent } from '../admin/admin-my-profile/admin-my-profile.component';
import { EditSiteSupervisorComponent } from '../admin/edit-site-supervisor/edit-site-supervisor.component';
import { AuthGuard } from '../_guards';
import { IndexComponent } from '../admin/index/index.component';





export const appRoutes:Routes  = [

    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    {path:'Login' , component:LoginComponent},
    {path:'AdminMyProfile' , component:AdminMyProfileComponent},
    {path:'VolReport' , component:VolunteersReportComponent},
    {path:'Attendance' , component:AttendanceComponent},
    {path:'EditAttendance' , component:EditAttendanceComponent},
    {path:'CountriesCites' , component:CountriesCitiesComponent, canActivate: [AuthGuard]},
    {path:'EditCountriesCites' , component:EditCountryCityComponent},
    {path:'AddCountriesCites' , component:AddCountryCityComponent},
    {path:'CountryNotes' , component:CountryNotesComponent},
    {path:'WorkPlaces' , component:WorkPlacesComponent},
    {path:'AddNewLocation' , component:AddNewLocationComponent},
    {path:'EditWorkPlace' , component:EditWorkplacesComponent},
    {path:'MemberVolunteers' , component:MembersVolunteersComponent},
    {path:'EditMemberVolunteers' , component:EditMembersVolunteersComponent},
    {path:'Rate' , component:RateComponent},
    {path:'ViewRate' , component:ViewRateComponent},
    {path:'SitesSupervisors' , component:SitesSupervisorsComponent},
    {path:'EditSitesSupervisors' , component:EditSiteSupervisorComponent},
    {path:'SupervisorWorkPlace' , component:SupWorkPlaceComponent},
    {path:'VolunteersNotes' , component:VolunteersNotesComponent},
    {path:'CitySupervisors' , component:CitySupervisorsComponent},
    {path:'AddCitySupervisors' , component:AddCitySupervisorsComponent},
    {path:'EditCitySupervisors' , component:EditCitySupervisorsComponent},
    {path:'CountrySupervisors' , component:CountrySupervisorsComponent},
    {path:'AddCountrySupervisors' , component:AddCountrySupervisorsComponent},
    {path:'EditCountrySupervisors' , component:EditCountrySupervisorsComponent},
    {path:'GeneralReport' , component:GeneralReportComponent},
    {path:'VolunteerCounter' , component:VolunteersCounterComponent},
    {path:'AttendanceByPlace' , component:AttendanceByPlaceComponent},
    {path:'AttendanceByPerson' , component:AttendanceByPersonComponent},
    {path:'EventsLog' , component:EventLogComponent},
    {path:'SiteVistors' , component:SiteVisitorsComponent},
    {path:'MainSitePages' , component:MainSitePagesComponent},
    {path:'EditHomePage' , component:EditHomeComponent},
    {path:'EditAboutPage' , component:EditAboutComponent},
    {path:'EditTerms' , component:EditTermsComponent},
    {path:'OfficialAgencies' , component:OfficialAgenciesComponent},
    {path:'AddOfficialAgencies' , component:AddOfficialAgenciesComponent},
    {path:'EditOfficialAgencies' , component:EditOfficialAgenciesComponent},
    {path:'Customers' , component:CustomersComponent},
    {path:'AddCustomers' , component:AddCustomersComponent},
    {path:'EditCustomers' , component:EditCustomersComponent},
    {path:'AdsBaners' , component:AdsBanarsComponent},
    {path:'AddAdsBaners' , component:AddAdsBanarsComponent},
    {path:'EditAdsBaners' , component:EditAdsBanarsComponent},
    {path:'ReceivedMessages' , component:ReceivedMessagesComponent},
    {path:'SiteOptions' , component:SiteOptionsComponent},
    {path:'UserPrivileges' , component:UserPrivilegesComponent},
    {path:'AddNewUser' , component:AddNewUserComponent},
    {path:'EditAdminsUser' , component:EditAdminsUserComponent},
    {path:'Backup' , component:BackupComponent},
    {path:'OpenCloseSite' , component:OpenCloseSiteComponent},
   
    
    /////user
    {path:'Home' , component:HomeComponent},
    {path:'About' , component:AboutComponent},
    {path:'Intro' , component:IntroComponent},
    {path:'Profile' , component:ProfileComponent},
    {path:'MyProfile' , component:MyProfileComponent},
    {path:'EditMyProfile' , component:EditMyProfileComponent},
    {path:'AddUser' , component:AddUserComponent},
    {path:'EditUser' , component:EditUserComponent},



    {path:'Index' , component:IndexComponent},

    { path: '**', redirectTo: '' }

]

export const routing = RouterModule.forRoot(appRoutes);