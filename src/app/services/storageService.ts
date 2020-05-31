import { Injectable } from '@angular/core';
import { Country } from '../models/country';
import { BehaviorSubject } from 'rxjs';
import { WeatherDetails } from '../models/weatherDetails';

@Injectable()
export class StorageService {

    public details: Country
    public weatherDetails: WeatherDetails;
    public weatherDetailsPipe$: BehaviorSubject<object> = new BehaviorSubject<object>({});
    public weatherDetailsPipeObs$ = this.weatherDetailsPipe$.asObservable();
   
    constructor() {
    }
    public getScope(): Country {
        return this.details;
    }

    public setScope(details: Country): void {
        this.details = details;
    }

   
    public updateWeatherDetails(details) {
        this.weatherDetailsPipe$.next(details);
    }

}