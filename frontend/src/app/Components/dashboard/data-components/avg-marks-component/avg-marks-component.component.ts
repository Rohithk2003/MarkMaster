import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexTheme,
  ChartComponent,
} from 'ng-apexcharts';
import { BrnSeparatorComponent } from '@spartan-ng/ui-separator-brain';

import { BrnSelectImports } from '@spartan-ng/ui-select-brain';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';
import { HlmSeparatorModule } from '../../../../../../libs/ui/ui-separator-helm/src/index';
import { HlmSeparatorDirective } from '../../../../../../libs/ui/ui-separator-helm/src/lib/hlm-separator.directive';

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
  selector: 'app-avg-marks-component',
  standalone: true,
  imports: [
    CommonModule,
    HlmButtonDirective,
    BrnSeparatorComponent,
    NgApexchartsModule,
    BrnSelectImports,
    HlmSelectImports,
    HlmSeparatorDirective,
  ],
  templateUrl: './avg-marks-component.component.html',
  styleUrl: './avg-marks-component.component.css',
})
export class AvgMarksComponent {
  @ViewChild('chart')
  chart: ChartComponent = new ChartComponent();
  public chartOptions: Partial<ChartOptions>;
  selectedCourse = 'CSE A';
  courses = [
    {
      name: 'CSE A',
      code: 'CSE A',
    },
    {
      name: 'CSE B',
      code: 'CSE B',
    },
    {
      name: 'CSE C',
      code: 'CSE C',
    },
  ];
  constructor() {
    this.chartOptions = {
      series: [44, 13, 20, 90, 98],
      colors: ['#ffffff', '#ffffff', '#ffffff'],
      chart: {
        type: 'pie',
        background: '#222222',
        foreColor: '#ffffff',
        fontFamily: 'Rethink Sans',
      },
      markers: {
        colors: ['#fff', '#fff', '#fff'],
      },
      labels: ['CSE A', 'CSE B', 'CSE C', 'CSE D', 'CSE E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {},
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
