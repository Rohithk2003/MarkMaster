import { CommonModule } from '@angular/common';
import {
  Component,
  Inject,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.css',
})
export class DashboardHeaderComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('click', this.handleClickOutside.bind(this));
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('click', this.handleClickOutside.bind(this));
    }
  }

  sidebarVisible = false;
  dropdownVisible = false;
  sidebarData = [
    {
      label: 'Dashboard',
      icon: PrimeIcons.HOME,
      href: '/dashboard',
    },
    {
      label: 'Student Details',
      icon: PrimeIcons.FILE,
      href: '/dashboard/student-details',
    },
    {
      label: 'Marks',
      icon: PrimeIcons.CHART_SCATTER,
      href: '/dashboard/marks-data',
    },
    {
      label: 'Attendance',
      icon: PrimeIcons.CHART_BAR,
      href: '/dashboard/attendance-data',
    },
  ];
  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }
  toggleDropdown(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }
  hideDropdown(e: Event): void {
    const element = e.target as HTMLElement;

    if (this.dropdownVisible && element.tagName !== 'IMG')
      this.dropdownVisible = false;
  }
  handleClickOutside(event: Event): void {
    const target = event.target as HTMLElement;

    if (this.dropdownVisible && target.tagName !== 'IMG') {
      this.dropdownVisible = false;
    }
  }
}
