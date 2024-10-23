import { Component } from '@angular/core';
import { DashboardHeaderComponent } from '../../Components/dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from '../../Components/dashboard-footer/dashboard-footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardHeaderComponent, DashboardFooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
