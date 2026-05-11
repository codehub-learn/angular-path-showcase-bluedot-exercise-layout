import { Component } from '@angular/core';
import { BugsService } from '../../shared/services/bugs.service';
import { Bug } from '../../shared/domain/bug';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-bugs',
  imports: [FormsModule],
  templateUrl: './bugs.component.html',
  styleUrl: './bugs.component.scss',
})
export class Bugs {
  bugs: Bug[] = []
  errorMessageOnGetCall?: string;
  dataLoaded: boolean = false;
  newBugTitle: string = "";

  constructor(private bugsService: BugsService) {
    // this.bugsService.getBugs().subscribe((bugs: Bug[]) => {
    //   console.log(bugs);
    //   this.bugs = bugs;
    // });

    this.bugsService.getBugs()
      //.pipe()
      .subscribe({
        next: (bugs) => {
          console.log('Success:', bugs);
          // Update your UI state here
          this.bugs = bugs;
          this.dataLoaded = true;
        },
        error: (err) => {
          // Change component state based on error (e.g. show friendly user message)
          this.errorMessageOnGetCall = "Could not show the bugs at the moment. Please try again later.";
        },
        complete: () => {
          console.log('Request finished.');
          // Logic to run regardless of data, like stopping a loader
        }
      });
  }

  postBug() {
    let newBug: Bug = {
      title: "New Bug",
      description: "This is a new bug.",
      priority: 1,
      reporter: "QA",
      status: "Ready for testing",
      comments: []
    };

    this.bugsService.postBugs(newBug).subscribe((createdBug: Bug) => {
      console.log(createdBug);
    });
  }

  onChange() {
    console.log("hello");
  }
}
