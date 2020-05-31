import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country';
import { WeatherDetails } from '../models/weatherDetails';

@Injectable()
export class CountryService {

    constructor(private http: HttpClient) {}

    getCountries() {
        return this.http.get<Country[]>('https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;flag;');
    }

    getWeatherDetails(capital, country, mode) {
        return this.http.get<WeatherDetails>('http://api.openweathermap.org/data/2.5/weather?q='+ capital +',' + country + '&units='+ mode + '&APPID=794ee95e63c5a32aaf88cd813fa2e425');
    }

}