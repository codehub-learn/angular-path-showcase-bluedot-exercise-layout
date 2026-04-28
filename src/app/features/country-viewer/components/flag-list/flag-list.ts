import { Component, EventEmitter, Output } from '@angular/core';
import { Flag } from '../../../../shared/domain/flag';

@Component({
  selector: 'app-flag-list',
  imports: [],
  templateUrl: './flag-list.html',
  styleUrl: './flag-list.scss',
})
export class FlagList {
  @Output() flagEventEmitter = new EventEmitter<Flag>();
  flags: Flag[] = [
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
  ];

  selectFlag(flag: Flag) {
    console.log("flag selected",flag.id);
    this.flagEventEmitter.emit(flag);
  }
}
