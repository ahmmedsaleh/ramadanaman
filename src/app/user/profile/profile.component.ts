import { Component, OnInit } from '@angular/core';
import { VolSearch, RegDay, UserNote } from 'src/app/_models/crud-class/policy';
declare var $ :any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {



  Result:  RegDay[];
  UserRegDay : RegDay = {Id : null, Day : null, City : null, Place : null};


  UserNotes : UserNote = {Id : null, Note : null};


 

  

  //aray of Cities
Cities = [
  {id: 1, name: "Cities1"},
  {id: 2, name: "Cities2"},
  {id: 3, name: "Cities3"},
  {id: 4, name: "Cities4"},
  {id: 5, name: "Cities5"},
  {id: 6, name: "Cities6"},
  {id: 7, name: "Cities7"},
  {id: 8, name: "Cities8"},
  {id: 9, name: "Cities9"}

]

//aray of Places
Places = [
  {id: 1, name: "place1"},
  {id: 2, name: "place2"},
  {id: 3, name: "place3"},
  {id: 4, name: "place4"},
  {id: 5, name: "place5"},
  {id: 6, name: "place6"},
  {id: 7, name: "place7"},
  {id: 8, name: "place8"},
  {id: 9, name: "place9"}

]



genderOfLogin:string = "male";
selected:boolean;



  //to get the value of radio button  -----> problem
  checkChangeHandeler(event:any){
    // this.LocationDetailes.Days = event.target.value;
  }



  /// to show the type of places button
  SelectType(event){
    let elementId = $(event.srcElement).parent(".content").siblings(".maincover").attr("id");
    if (this.ReservedDayes[elementId - 1].value == false){
      if(this.genderOfLogin === "female"){
        $(".location-type").css("display","none");
        $(".edit-remove-day").css("display","none");
        let nameOfElement = (event.srcElement);
        $(nameOfElement).parents(".ramadan-days").siblings().find(".cityLoc").css("display","none");
        $(nameOfElement).siblings(".location-type").fadeIn(500);
  
      }else{
        $(".location-type").css("display","none");
        $(".edit-remove-day").css("display","none");
        let nameOfElement = (event.srcElement); 
        $(nameOfElement).parents(".ramadan-days").siblings().find(".cityLoc").css("display","none");
        $(nameOfElement).siblings(".cityLoc").slideDown(500); 
      }
    }
    else{
      let nameOfElement = (event.srcElement);
      $(".edit-remove-day").css("display","none");
      $(nameOfElement).siblings(".edit-remove-day").fadeIn(500);
      $(nameOfElement).parents(".ramadan-days").siblings().find(".cityLoc").css("display","none");
    }
    
  }



  //// to show the form to select the city and the place
  selectCityLoc(event){
    let nameOfElement = (event.srcElement);
    $(".cityLoc").css("display","none");
    $(".location-type").css("display","none");
    $(nameOfElement).parent(".location-type").siblings(".cityLoc").slideDown(500);
  }



 
  ///// to hide the form and send data
  savee(event){
    let nameOfElement = (event.srcElement);
    $(nameOfElement).parents(".location-type").fadeOut(500);
    $(nameOfElement).parents(".cityLoc").slideUp(500);
    let elementId = $(event.srcElement).parent(".content").siblings(".maincover").attr("id");
    this.ReservedDayes[elementId - 1].value = true;
    this.UserRegDay.Day = elementId;
    console.log(this.UserRegDay);

  }


  // edit city and location
  EditCityLoc(event){
    let nameOfElement = (event.srcElement);
    $(".edit-remove-day").css("display","none");
    $(".location-type").css("display","none");
    $(nameOfElement).parents(".edit-remove-day").siblings(".cityLoc").slideDown(500);
    let elementId = $(event.srcElement).parent(".content").siblings(".maincover").attr("id")
    console.log(event);
  }

  // delete registration 
  DeleteCityLoc(event){
    let nameOfElement = (event.srcElement);
    $(nameOfElement).parents(".edit-remove-day").fadeOut(500);
    let elementId = (event.srcElement.offsetParent.offsetParent.offsetParent.previousElementSibling.id);
    this.ReservedDayes[elementId - 1].value = false;
    console.log(elementId);
  }



  constructor() {

    
   }



   ReservedDayes = [ 
     {id: 1, value : false},
     {id: 2, value : false},
     {id: 3, value : false},
     {id: 4, value : false},
     {id: 5, value : true},
     {id: 6, value : false},
     {id: 7, value : true},
     {id: 8, value : true},
     {id: 9, value : true},
     {id: 10, value : true},
     {id: 11, value : true},
     {id: 12, value : true},
     {id: 13, value : true},
     {id: 14, value : true},
     {id: 15, value : true},
     {id: 16, value : false},
     {id: 17, value : true},
     {id: 18, value : true},
     {id: 19, value : true},
     {id: 20, value : true},
     {id: 21, value : true},
     {id: 22, value : true},
     {id: 23, value : true},
     {id: 24, value : true},
     {id: 25, value : true},
     {id: 26, value : true},
     {id: 27, value : true},
     {id: 28, value : true},
     {id: 29, value : false},
     {id: 30, value : true}
   ]




   /// test note
   testttt(){
     console.log(this.UserNotes);
   }

  ngOnInit(): void {

  }

}
