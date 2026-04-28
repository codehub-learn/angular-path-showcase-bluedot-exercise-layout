import { Component, Input } from '@angular/core';
import { Flag } from '../../../../shared/domain/flag';

@Component({
  selector: 'app-country-details',
  imports: [],
  templateUrl: './country-details.html',
  styleUrl: './country-details.scss',
})
export class CountryDetails {
  @Input() selectedFlag?: Flag;
  countryInfo: any[] = [
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
}
