import { Component } from '@angular/core';
import { PublisherService } from '../../../../shared/services/publisher-service';
import { Parcel } from '../../../../shared/domain/transfer/parcel';

@Component({
  selector: 'app-observer',
  imports: [],
  templateUrl: './observer.html',
  styleUrl: './observer.scss',
})
export class Observer {
  isTextVisible = false;

  constructor(private publisherService: PublisherService) {
    this.listenForPublisherEvents();
  }

  listenForPublisherEvents() {
    this.publisherService.listen().subscribe((parcel: Parcel) => {
      console.log(parcel.type);
      console.log(parcel.data);
      console.log(parcel.from);
      if (parcel.type === "ButtonClicked") {
        this.isTextVisible = !this.isTextVisible;
      }
    });
  }
}
