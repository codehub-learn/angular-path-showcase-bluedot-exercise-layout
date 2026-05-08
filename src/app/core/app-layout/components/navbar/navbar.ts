import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  navRoutes = [
    { path: 'landing-page', title: 'Home' },
    { path: 'users', title: 'Users' },
    { path: 'lifecycle', title: 'Lifecycle' },
    { path: 'country-viewer', title: 'Country Viewer' },
    { path: 'background-color-changer', title: 'Background Color Changer' },
    { path: 'greece-map', title: 'Greece Map' },
    { path: 'cross-component-communication', title: 'Cross Component Communication' },
    { path: 'customers', title: 'Customers' }
  ];
}
