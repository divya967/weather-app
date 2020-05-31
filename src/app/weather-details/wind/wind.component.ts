import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storageService';
import { Wind } from 'src/app/models/weatherDetails';

@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.scss']
})
export class WindComponent implements OnInit {
  weatherDetails: any;
  speed: string;
  constructor(private _storageService: StorageService) { }

  ngOnInit(): void {
    this._storageService.weatherDetailsPipeObs$.subscribe(data => {
      this.weatherDetails = data;
      this.speed = data && data['wind'] && data['wind']['speed']; 
    });
  }

}
