import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Parcel } from '../domain/transfer/parcel';

@Injectable({
  providedIn: 'root',
})
export class PublisherService {
  private publisher = new ReplaySubject<Parcel>(); // check BehaviourSubject as well

  // take data
  publish(parcel: Parcel) {
    this.publisher.next(parcel);
  }

  // publish/transmit data
  listen(){
    return this.publisher.asObservable();
  }
}
