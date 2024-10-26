import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.css',
})
export class DashboardHeaderComponent {
  sidebarVisible = false;
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
}
