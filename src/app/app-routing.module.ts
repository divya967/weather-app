import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { CountriesComponent } from './countries/countries.component';
import { WindComponent } from './weather-details/wind/wind.component';
import { TemperatureComponent } from './weather-details/temperature/temperature.component';
import { PrecipitationComponent } from './weather-details/precipitation/precipitation.component';


const routes: Routes = [
  { path: '',   redirectTo: 'countries', pathMatch: 'full' },
  { path: 'coutries', component: CountriesComponent },
  { path: 'weather', component: WeatherDetailsComponent, children: [
    { path: '',   redirectTo: 'temperature', pathMatch: 'full' },
    { path: 'temperature', component: TemperatureComponent},
    { path: 'precipitation', component: PrecipitationComponent},
    { path: 'wind', component: WindComponent}]},
  { path: '**', component: CountriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
