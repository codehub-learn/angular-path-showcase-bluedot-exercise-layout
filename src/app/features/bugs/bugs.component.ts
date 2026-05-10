import {Component} from '@angular/core';
import {BugsService} from '../../shared/services/bugs.service';

@Component({
  selector: 'app-bugs',
  imports: [],
  templateUrl: './bugs.component.html',
  styleUrl: './bugs.component.scss',
})
export class Bugs {
  bugs: any[] = []

  constructor(private bugsService: BugsService) {
    this.bugsService.getBugs().subscribe((bugs: any) => {
      console.log(bugs);
      this.bugs = bugs;
    });
  }
}
