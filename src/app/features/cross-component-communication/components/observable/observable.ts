import { Component } from '@angular/core';
import { PublisherService } from '../../../../shared/services/publisher-service';

@Component({
  selector: 'app-observable',
  imports: [],
  templateUrl: './observable.html',
  styleUrl: './observable.scss',
})
export class Observable {
  constructor(private publisherService: PublisherService){}

  publishClick() {
    this.publisherService.publish({
      type: "ButtonClicked",
      data: "click",
      from: this.constructor.name
    });
  }
}
