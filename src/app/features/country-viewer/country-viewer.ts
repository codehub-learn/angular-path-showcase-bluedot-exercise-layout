import { Component } from '@angular/core';
import { FlagList } from "./components/flag-list/flag-list";
import { CountryDetails } from './components/country-details/country-details';
import { Flag } from '../../shared/domain/flag';

@Component({
  selector: 'app-country-viewer',
  imports: [FlagList, CountryDetails],
  templateUrl: './country-viewer.html',
  styleUrl: './country-viewer.scss',
})
export class CountryViewer {
  flagToShow?: Flag;

  // is triggered when click event happens in flag-list
selectFlag(flag: Flag) {
  console.log("parent: flag selected", flag);
  this.flagToShow = flag;
}

}
