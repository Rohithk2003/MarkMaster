import { Component } from '@angular/core';
import { NgClass, NgForOf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgForOf, NgClass, NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navOptions = [
    { text: 'Home', href: '/' },
    { text: 'Features', href: '/features' },
    { text: 'Contact', href: '/contact' },
  ];
  protected readonly window = window;
}
