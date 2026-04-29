import { AfterViewChecked, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-simple-component',
  imports: [],
  templateUrl: './simple-component.html',
  styleUrl: './simple-component.scss',
})
export class SimpleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() name?: string;

  constructor() {
    console.log("hello from constructor");
    console.log("value of name:", this.name);
  }

  ngOnInit(): void {
    console.log("hello from on init");
    console.log("value of name (init):", this.name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy(): void {
    console.log("component destroyed");
  }
}
