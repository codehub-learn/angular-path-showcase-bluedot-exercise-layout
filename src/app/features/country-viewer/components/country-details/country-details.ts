import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Flag } from '../../../../shared/domain/flag';
import { CountryInfo } from '../../../../shared/domain/country-info';

@Component({
  selector: 'app-country-details',
  imports: [],
  templateUrl: './country-details.html',
  styleUrl: './country-details.scss',
})
export class CountryDetails implements OnChanges {
  @Input() selectedFlag?: Flag;
  countryInfo?: CountryInfo;
  countriesInfo: CountryInfo[] = [
    {
      "id": 1,
      "name": "Greece",
      "capital": "Athens",
      "population": 10400000
    },
    {
      "id": 2,
      "name": "Pakistan",
      "capital": "Islamabad",
      "population": 235800000
    },
    {
      "id": 3,
      "name": "Japan",
      "capital": "Tokyo",
      "population": 125100000
    }
  ]

  getCountryById(id: number) {
    // backend call to fetch detailed information per country
   let foundCountry = this.countriesInfo.find(country => country.id === id);
    console.log(foundCountry);
    this.countryInfo = foundCountry;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes); 
    if(changes["selectedFlag"] && !changes["selectedFlag"].firstChange) {
      this.getCountryById(this.selectedFlag!.id);
    }
  }
}
