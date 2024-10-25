import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
} from 'ng-apexcharts';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { BrnSeparatorComponent } from '@spartan-ng/ui-separator-brain';
import {HlmButtonDirective} from '@spartan-ng/ui-button-helm';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};
@Component({
  selector: 'app-lesson-attendence-component',
  standalone: true,
  imports: [
    NgApexchartsModule,
    CommonModule,
    HlmSeparatorDirective,
    BrnSeparatorComponent,
    HlmButtonDirective,
  ],
  templateUrl: './lesson-attendence-component.component.html',
  styleUrl: './lesson-attendence-component.component.css',
})
export class LessonAttendenceComponentComponent {
  @ViewChild('chart')
  chart: ChartComponent = new ChartComponent();
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Thu 7 Oct',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: 'Thu 8 Oct',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: 'Thu 9 Oct',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
      ],
      chart: {
        type: 'bar',
        foreColor: '#ffffff',
        fontFamily: 'Rethink Sans',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 10,
        },
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ['#000000'],
        },
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
        ],
      },
      yaxis: {
        title: {
          text: '',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        cssClass: 'text-black',
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands';
          },
        },
      },
    };
  }
}
