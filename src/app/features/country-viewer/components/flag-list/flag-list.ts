import { Component } from '@angular/core';

@Component({
  selector: 'app-flag-list',
  imports: [],
  templateUrl: './flag-list.html',
  styleUrl: './flag-list.scss',
})
export class FlagList {
  flags = [
    {
      "id": 1,
      "url": "assets/images/flags/greece.svg.png",
      "alt": "Flag of Greece"
    },
    {
      "id": 2,
      "url": "assets/images/flags/pakistan.webp",
      "alt": "Flag of Greece"
    },
    {
      "id": 3,
      "url": "assets/images/flags/japan.png",
      "alt": "Flag of Greece"
    }
  ]
}
