import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexTheme,
  ChartComponent,
} from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';
import { AttendenceComponent } from "../data-components/attendance-component/attendance-component.component";
import { CalenderComponentComponent } from "../data-components/calender-component/calender-component.component";
import { LessonAttendenceComponentComponent } from "../data-components/lesson-attendence-component/lesson-attendence-component.component";
import { AvgMarksComponent } from "../data-components/avg-marks-component/avg-marks-component.component";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  dataLabels: ApexDataLabels;
  colors: any;
  legend: any;
  fill: ApexFill;
  theme: ApexTheme;
  markers: ApexMarkers;
};
@Component({
  selector: 'app-dashboard-main',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule, AttendenceComponent, CalenderComponentComponent, LessonAttendenceComponentComponent, AvgMarksComponent],
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.css',
})
export class DashboardMainComponent {
  @ViewChild('chart')
  chart: ChartComponent = new ChartComponent();
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 13, 20, 90, 98],
      colors: ['#ffffff', '#ffffff', '#ffffff'],
      chart: {
        width: 380,
        type: 'pie',
        background: '#222222',
        foreColor: '#ffffff',
      },
      markers: {
        colors: ['#fff', '#fff', '#fff'],
      },
      labels: ['CSE A', 'CSE B', 'CSE C', 'CSE D', 'CSE E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
              colors: ['#fff', '#fff', '#fff'],
            },
          },
        },
      ],
    };
  }
}
