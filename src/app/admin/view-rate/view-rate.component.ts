import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-rate',
  templateUrl: './view-rate.component.html',
  styleUrls: ['./view-rate.component.scss']
})
export class ViewRateComponent implements OnInit {

  //for pagination
  p: number = 1;
  collection: any[] = [
    {
      name:'Ahmed Hashem Saleh',
      mobile:'0501404662',
      date:'10-11-2019',
      note:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    },
    {
      name:'Mohammed Hashem Saleh',
      mobile:'0501404662',
      date:'10-11-2019',
      note:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    },
    {
      name:'Mohammed Hashem Saleh',
      mobile:'0501404662',
      date:'10-11-2019',
      note:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    },
    {
      name:'Mohammed Hashem Saleh',
      mobile:'0501404662',
      date:'10-11-2019',
      note:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    },
    {
      name:'Mohammed Hashem Saleh',
      mobile:'0501404662',
      date:'10-11-2019',
      note:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    },
    {
      name:'Mohammed Hashem Saleh',
      mobile:'0501404662',
      date:'10-11-2019',
      note:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    },
    {
      name:'Mohammed Hashem Saleh',
      mobile:'0501404662',
      date:'10-11-2019',
      note:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    },
    {
      name:'Mohammed Hashem Saleh',
      mobile:'0501404662',
      date:'10-11-2019',
      note:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    },
    {
      name:'Mohammed Hashem Saleh',
      mobile:'0501404662',
      date:'10-11-2019',
      note:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    },
    {
      name:'Mohammed Hashem Saleh',
      mobile:'0501404662',
      date:'10-11-2019',
      note:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    },
    {
      name:'Mohammed Hashem Saleh',
      mobile:'0501404662',
      date:'10-11-2019',
      note:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    },
    {
      name:'Mohammed Hashem Saleh',
      mobile:'0501404662',
      date:'10-11-2019',
      note:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    },
    {
      name:'Mohammed Hashem Saleh',
      mobile:'0501404662',
      date:'10-11-2019',
      note:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
