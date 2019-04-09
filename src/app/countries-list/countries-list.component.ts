import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../shared/services/countries-list-service.service';
import { CountriesData } from '../shared/models/countries-data.model';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  allcountries:Array <CountriesData>;

  search(str:string):void{ // filtering the result by str - the current input

    this.allcountries=new Array<CountriesData>(); // in each tap restart

    for(let i of this.myService.countriesList){

      if (i.name.toLowerCase().indexOf(str.toLowerCase())!=-1 ||
          i.capital.toLowerCase().indexOf(str.toLowerCase())!=-1) { // not a case sensitive

          this.allcountries.push(i); // all the current filtered results
      }
    }
  }

  constructor(private myService:CountriesService) { }

  ngOnInit() { }
}

