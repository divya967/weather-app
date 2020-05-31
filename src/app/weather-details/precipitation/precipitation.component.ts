import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storageService';
import { Weather, WeatherDetails } from 'src/app/models/weatherDetails';

@Component({
  selector: 'app-precipitation',
  templateUrl: './precipitation.component.html',
  styleUrls: ['./precipitation.component.scss']
})
export class PrecipitationComponent implements OnInit {
  weatherDetails;
  cloudDetails: Weather;
  imageUrl: string;
  constructor(private _storageService: StorageService) { }

  ngOnInit(): void {
    this._storageService.weatherDetailsPipeObs$.subscribe((data) => {
      this.weatherDetails = data;
      this.weatherDetails && this.getCloudDetails();
    });
  }

  private getCloudDetails() {
    this.cloudDetails = this.weatherDetails['weather'];
    this.cloudDetails && this.getPrecipitationImageIcon();
  }

  private getPrecipitationImageIcon() {
    this.imageUrl = "http://openweathermap.org/img/wn/"+ this.cloudDetails[0].icon + ".png"
  }
}
