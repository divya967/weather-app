import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryService } from '../services/countryservice';
import { Table } from 'primeng/table/table';
import { Country } from '../models/country';
import { StorageService } from '../services/storageService';
import { Default } from '../constants/weatherConstants';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})

export class CountriesComponent implements OnInit {
  data: Country[];

  selectedCustomers: any[];

  loading: boolean = true;

  weatherDetails: any;
  selectedMode: string;
  

  @ViewChild('dt') table: Table;

  constructor(private _countryService: CountryService, private _storageService: StorageService) { 
    this.selectedMode = Default;
  }

  ngOnInit() {
    this._countryService.getCountries().subscribe((data: Country[]) => {
        this.data = data;
        this.loading = false;
    });
  }

  setCountryDetails(data: Country) {
    this._storageService.setScope(data);
  }

}
