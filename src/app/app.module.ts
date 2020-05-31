import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { StorageService } from './services/storageService';
import { CountryService } from './services/countryservice';
import { TemperatureComponent } from './weather-details/temperature/temperature.component';
import { WindComponent } from './weather-details/wind/wind.component';
import { PrecipitationComponent } from './weather-details/precipitation/precipitation.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDetailsComponent,
    CountriesComponent,
    TemperatureComponent,
    WindComponent,
    PrecipitationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    RouterModule
  ],
  providers: [StorageService, CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
