import { Component } from '@angular/core';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { BackgroundColorChanger } from '../../features/background-color-changer/background-color-changer';

@Component({
  selector: 'app-layout',
  imports: [Footer, Navbar, BackgroundColorChanger],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.scss',
})
export class AppLayout {

}
