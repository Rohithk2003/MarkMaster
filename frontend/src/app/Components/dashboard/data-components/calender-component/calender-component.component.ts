import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { BrnSeparatorComponent } from '@spartan-ng/ui-separator-brain';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
@Component({
  selector: 'app-calender-component',
  standalone: true,
  imports: [
    CalendarModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrnSeparatorComponent,
    HlmSeparatorDirective,
    ReactiveFormsModule,
  ],
  templateUrl: './calender-component.component.html',
  styleUrl: './calender-component.component.css',
})
export class CalenderComponentComponent {
  date: any;
}
