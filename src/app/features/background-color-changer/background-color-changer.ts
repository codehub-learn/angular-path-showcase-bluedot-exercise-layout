import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-background-color-changer',
  imports: [NgClass, NgStyle],
  templateUrl: './background-color-changer.html',
  styleUrl: './background-color-changer.scss',
})
export class BackgroundColorChanger {
  isBackgroundColorChanged = false;

  changeBackgroundColor() {
    this.isBackgroundColorChanged = true;
  }

  
}
