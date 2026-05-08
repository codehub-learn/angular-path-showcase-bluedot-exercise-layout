import { Component, OnDestroy } from '@angular/core';
import { PublisherService } from '../../../../shared/services/publisher-service';
import { Parcel } from '../../../../shared/domain/transfer/parcel';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observer',
  imports: [],
  templateUrl: './observer.html',
  styleUrl: './observer.scss',
})
export class Observer implements OnDestroy {
  isTextVisible = false;
  subscription?: Subscription;

  constructor(private publisherService: PublisherService) {
    this.listenForPublisherEvents();
  }
  
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  listenForPublisherEvents() {
    this.subscription = this.publisherService.listen().subscribe((parcel: Parcel) => {
      console.log(parcel.type);
      console.log(parcel.data);
      console.log(parcel.from);
      if (parcel.type === "ButtonClicked") {
        this.isTextVisible = !this.isTextVisible;
      }
    });
  }
}
