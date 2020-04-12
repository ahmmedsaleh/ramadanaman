import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  //variables
  Heading:string = "PYRAMIDS PLAZA";
  Discription:string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  MobileNo1:string = "1-220-554-665";
  MobileNo2:string = "2-581-265-751";
  Address:string = "17 the end of faisl ST.Giza";
  Email:string = "HotelName@gmail.com";


  constructor() { }

  ngOnInit(): void {
  }

}
