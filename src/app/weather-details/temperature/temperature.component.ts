import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storageService';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {
  weatherDetails: any;
  temperature: number;

  constructor(private _storageService: StorageService) {
  }

  ngOnInit(): void {
    this._storageService.weatherDetailsPipeObs$.subscribe((data) => {
      this.weatherDetails = data;
      this.temperature = this.weatherDetails['main'] && this.weatherDetails['main']['temp'];
    });
  }
    
}
