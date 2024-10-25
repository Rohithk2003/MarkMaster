import { Component } from '@angular/core';
import { DashboardHeaderComponent } from '../../Components/dashboard/dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from '../../Components/dashboard/dashboard-footer/dashboard-footer.component';
import { DashboardMainComponent } from '../../Components/dashboard/dashboard-main/dashboard-main.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DashboardHeaderComponent,
    DashboardFooterComponent,
    DashboardMainComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
