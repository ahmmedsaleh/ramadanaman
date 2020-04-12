import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  //variables
  Heading:string = "ABOUT PYRAMIDS PLAZA";
  PragraphPart1:string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  PragraphPart2:string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  BackGroundImage:string = "../../../assets/images/img.jpg";
  //opinion
   OpinionHeading1:string = "WHAT OUR GISTS ARE SAY";
   OpinionPragraph1:string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
   OpinionDetails1:string = "Name , Title";
   OpinionHeading2:string = "WHAT OUR GISTS ARE SAY";
   OpinionPragraph2:string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
   OpinionDetails2:string = "Name , Title";
   OpinionHeading3:string = "WHAT OUR GISTS ARE SAY";
   OpinionPragraph3:string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
   OpinionDetails3:string = "Name , Title";

  constructor() { }

  ngOnInit(): void {
  }

}
