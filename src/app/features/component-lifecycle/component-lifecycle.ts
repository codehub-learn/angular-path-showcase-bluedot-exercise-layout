import { Component } from '@angular/core';
import { SimpleComponent } from './components/simple-component/simple-component';



@Component({
  selector: 'app-component-lifecycle',
  imports: [SimpleComponent],
  templateUrl: './component-lifecycle.html',
  styleUrl: './component-lifecycle.scss',
})
export class ComponentLifecycle  {
  isComponentLifecycleVisible = true;

  toggleComponentLifecycle() {
    this.isComponentLifecycleVisible = !this.isComponentLifecycleVisible;
  }
}
