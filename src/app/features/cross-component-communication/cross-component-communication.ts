import { Component } from '@angular/core';
import { Observable } from "./components/observable/observable";
import { Observer } from './components/observer/observer';
import { Observer2 } from './components/observer-2/observer-2';

@Component({
  selector: 'app-cross-component-communication',
  imports: [Observable, Observer, Observer2],
  templateUrl: './cross-component-communication.html',
  styleUrl: './cross-component-communication.scss',
})
export class CrossComponentCommunication {

}
