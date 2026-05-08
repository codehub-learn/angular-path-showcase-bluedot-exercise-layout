import { NgClass } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { PublisherService } from '../../../../shared/services/publisher-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observer-2',
  imports: [NgClass],
  templateUrl: './observer-2.html',
  styleUrl: './observer-2.scss',
})
export class Observer2 implements OnDestroy {
  isEventReceived = false
  subscription?: Subscription;

    constructor(private publisherService: PublisherService){
      this.listenForPublisherEvents();
    }

    ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  
    listenForPublisherEvents(){
        this.subscription = this.publisherService.listen().subscribe(() => {
          this.isEventReceived = !this.isEventReceived;
        });
    }
}
