import { Component } from '@angular/core';
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgOptimizedImage,
} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgForOf, NgClass, CommonModule, NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  sidebarVisible = false;
  sidebarData = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      href: '/',
    },
    {
      label: 'Features',
      icon: 'pi pi-file',
      href: '/features',
    },
    {
      label: 'Contact',
      icon: 'pi pi-chart-line',
      href: '/contact',
    },
  ];
  navOptions = [
    { text: 'Home', href: '/' },
    { text: 'Features', href: '/features' },
    { text: 'Contact', href: '/contact' },
  ];
  constructor(private router: Router) {}
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
  onLoginClick() {
    this.router.navigate(['/login']);
  }
}
