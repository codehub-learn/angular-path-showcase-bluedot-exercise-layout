import { Component } from '@angular/core';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { BackgroundColorChanger } from '../../features/background-color-changer/background-color-changer';
import { CountryViewer } from "../../features/country-viewer/country-viewer";
import { ComponentLifecycle } from "../../features/component-lifecycle/component-lifecycle";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [Footer, Navbar, BackgroundColorChanger, CountryViewer, ComponentLifecycle, RouterOutlet],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.scss',
})
export class AppLayout {
}
