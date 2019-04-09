import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CountriesData } from "../models/countries-data.model";


@Injectable()
export class CountriesService{

    countriesList:CountriesData[]=new Array<CountriesData>();

    constructor(private myHttpClient:HttpClient){

        this.initApi();
    }

    initApi():void{
        let apiUrl:string='https://restcountries.eu/rest/v2/all';  //get all the countries and afterwards presenting the results filtered by the client
        this.myHttpClient.get(apiUrl).subscribe((x:CountriesData[])=>{this.countriesList=x})
    }
}