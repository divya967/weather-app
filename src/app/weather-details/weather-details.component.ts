import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';
import { StorageService } from '../services/storageService';
import { CountryService } from '../services/countryservice';
import { WeatherDetails } from '../models/weatherDetails';
import { imperial, metric, celsius, farenheit, meter, miles } from '../constants/weatherConstants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  countryDetails: Country;
  weatherDetails: WeatherDetails;
  loading: boolean;
  description: string;
  mode: string;
  constructor(private _storageService: StorageService, private _countryService: CountryService, private route: Router) {
    this.mode = imperial;
  }

  ngOnInit(): void {
    this.countryDetails = this._storageService.getScope();
    if(!this.countryDetails) {
      this.route.navigateByUrl('/countries');
    }
    this.retrieveWeatherDetails(this.countryDetails.capital, this.countryDetails.name, metric);
  }

  retrieveWeatherDetails(capital: string, country: string, mode: string) {
    this._countryService.getWeatherDetails(capital, country, mode).subscribe((data: WeatherDetails) => {
      if(data) {
        this.description = data && data.weather && data.weather[0] && data.weather[0].description;
        data['temp_units'] = this.mode === metric ? celsius: farenheit;
        data['speed_units'] = this.mode === metric ? meter: miles;
        this._storageService.updateWeatherDetails(data);
        this.loading = false;
        this.mode = this.mode === imperial ? metric : imperial;
      }
    });
  }

  changeMode() {
    this.retrieveWeatherDetails(this.countryDetails.capital, this.countryDetails.name, this.mode);
  }

}
