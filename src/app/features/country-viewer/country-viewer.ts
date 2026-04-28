import { Component } from '@angular/core';
import { FlagList } from "./components/flag-list/flag-list";
import { CountryDetails } from './components/country-details/country-details';

@Component({
  selector: 'app-country-viewer',
  imports: [FlagList, CountryDetails],
  templateUrl: './country-viewer.html',
  styleUrl: './country-viewer.scss',
})
export class CountryViewer {

}
