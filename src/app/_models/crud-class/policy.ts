
/////////////////////////////////////////////* Start User Pages */////////////////////////////////////////////////

import { ArrayType } from '@angular/compiler';

//Sign Up Data for users
export  class  Signup {
    id              : number;
    RegType         : number;
    AgencyType      : number;
    AcadimicId      : number;
    StNameEn        : number;
    EdNameEn        : number;
    RdNameEn        : number;
    ThameEn         : number;
    StNameAr        : number;
    EdNameAr        : number;
    RdNameAr        : number;
    ThameAr         : number;
    BirthDate       : number;
    Gender          : number;
    Nationality     : number;
    Country         : number;
    City            : number;
    NewsLetter      : number; 
    Username        : number;
    Phone           : number;
    Email           : number;
    Password        : number; 
    Terms           : number; 
}

// Login Data for users
export  class  UserLogin {
    Username : number;
    Password : number;
    Remember : number;
}


// edit my profile
export  class  EditMyProfile {
    Id              : number;
    StNameEn        : number;
    EdNameEn        : number;
    RdNameEn        : number;
    ThameEn         : number;
    StNameAr        : number;
    EdNameAr        : number;
    RdNameAr        : number;
    ThameAr         : number;
    Email           : number;
    Password        : number; 
    Phone           : number;
    BirthDate       : number;
    Gender          : number;
    Nationality     : number;
}



// Rating for users
export  class  UserRating {
    Id      : number;
    Rate    : number;
}


// edit my Voulnteers for their parent
export  class  EditAddMyVol {
    Id              : number;
    StNameEn        : number;
    EdNameEn        : number;
    RdNameEn        : number;
    ThameEn         : number;
    StNameAr        : number;
    EdNameAr        : number;
    RdNameAr        : number;
    ThameAr         : number;
    BirthDate       : number;
    Phone           : number;
    Gender          : number;
}



// for  user register day
export  class  RegDay {
    Id      : number;
    Day     : number;
    City    : number;
    Place   : number;
}


// for  user notes
export  class  UserNote {
    Id      : number;
    Note    : number;
  
}



/////////////////////////////////////////////* End User Pages */////////////////////////////////////////////////





//login admin info
export class AdminLogin {
    username : number;
    password : number;
   
}

//volunteer search
export class VolSearch {
    Phone   : number;
    Name    : number;
    Gov     : number;
    Day     : number;
    Country : number;
    City    : number;
    Place   : number;
    Date    : number;

}



//volunteer search
export class CountO {
    id   : number;
    name    : number;
}

//Absance Value
export class AbsanceVal {
    ID        : number;
    Status    : number;
}

//Add Country & City
export class AddCountryCity {
    type        : number;
    country_id  : number;
    name_en     : number;
    name_ar     : number;
    Image       : number;
    phone_Code   : number;
}


//Edit Country & City
export class EditCountryCity {
    id          : number;
    type        : number;
    country_id  : number;
    name_en     : number;
    name_ar     : number;
    image       : number;
    phone_Code   : number;
    status      : number;
}

//Country Notes
export class CountryNotes {
  
    note_en         : number;
    note_ar         : number;
    phone           : number;
    country_id      : number;
}


//Add Edit Location
export class AddEditLocation {
    id               : number;
    name_en          : number;
    name_ar          : number;
    country_id         : number;
    city_id            : number;
    person_required       : number;
    place_type       : number;
    hours        : number;
    map_code         : number;
    dayes            : [number];
    mssg_en     : number;
    mssg_ar     : number;
    active          : number;

}






//edit member & volunteers
export class EditMemVol {
    id              : number;
    type            : number;
    agancey         : number;
    acc_id          : number;
    password        : number
    first_name_en   : number;
    second_name_en  : number;
    third_name_en   : number;
    fourth_name_en  : number;
    first_name_ar   : number;
    second_name_ar  : number;
    third_name_ar   : number;
    fourth_name_ar  : number;
    phone           : number;
    email           : number;
    gender          : number;
    mem_type        : number;
    place_id        : number;
    nationality     : number;
    news_letter     : number;
    note            : number;
    status          : number;
}





//add edit City Supervisor
export class AddEditCitySupervisor {
    id              : number;
    username        : number;
    password        : number;
    full_name       : number;
    email           : number;
    country_id      : number;
    city_id         : number;
    status          : number;
}


//add edit Country Supervisor
export class AddEditCountrySupervisor {
    id              : number;
    username        : number;
    password        : number;
    c_password        : number;
    name       : number;
    email           : number;
    country_id      : number;
    status          : number;
}


//add edit Home Page
export class EditHomePage {
    image               : number;
    about_text_en       : number;
    about_text_ar       : number;
}


//add edit About Page
export class EditAboutPage {  
    about_text_en       : number;
    about_text_ar       : number;
    image               : number;
}


//add edit Terms
export class EditTerms { 
    header_en           : number;
    header_ar           : number;
    first_en            : number;
    first_ar            : number;
    second_en           : number;
    second_ar           : number;
    third_en            : number;
    third_ar            : number;
    fourth_en           : number;
    fourth_ar           : number;
    fifth_en            : number;
    fifth_ar            : number;
    six_en              : number;
    six_ar              : number;
    seven_en            : number;
    seven_ar            : number;
}



//add edit Official agancy
export class AddEditAgancy { 
    id              : number;
    country_id      : number;
    name_en         : number;
    name_ar         : number
}





//add edit Customer
export class AddEditCustomer { 
    id              : number;
    country_id      : number;
    name_en         : number;
    name_ar         : number;
    link            : number;
    image           : number;
    status          : number;
}



//Site OPtions Edit Options 
export class SiteOptEditOpt { 
    name_en         : number;
    name_ar         : number;
    desc_en         : number;
    desc_ar         : number;
    keywords_en     : number;
    keywords_ar     : number;
    email           : number;
    date            : number;
}



//Site OPtions Member Settings
export class SiteOptMemSett { 
    allow_new_reg        : number;
    mem_act      : number;
    calender_edit    : number;
}

 

//Site OPtions Language Settings
export class SiteOptLangSett { 
    def_lang    : number;
    oth_lang     : number;
}



//Site OPtions Site Logo Settings
export class SiteOptLogoSett { 
    site_logo    : number;
    site_color     : number;
}



//Site OPtions Contact Settings
export class SiteOptContSett { 
    phone       : number;
    email       : number;
}


//Site OPtions Social Settings
export class SiteOptSocialSett { 
    facebook    : number;
    twitter     : number;
    youtube     : number;
    linked_in    : number;
    instagram   : number;
    snapchat    : number;
}


//Add new user
export class AddNewUser { 
    Username    : number;
    Password    : number;
    FullName    : number;
    Email       : number;
    Type        : number;
    Country     : number;
}



//Open Close Site
export class OpenCloseSite { 
    Status    : number;
    MessageEn    : number;
    MessageAr    : number;
}


