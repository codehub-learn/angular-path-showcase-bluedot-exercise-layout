import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { PublisherService } from '../../../../shared/services/publisher-service';

@Component({
  selector: 'app-observer-2',
  imports: [NgClass],
  templateUrl: './observer-2.html',
  styleUrl: './observer-2.scss',
})
export class Observer2 {
  isEventReceived = false

    constructor(private publisherService: PublisherService){
      this.listenForPublisherEvents();
    }
  
    listenForPublisherEvents(){
        this.publisherService.listen().subscribe(() => {
          this.isEventReceived = !this.isEventReceived;
        });
    }
}
