import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { BrnSeparatorComponent } from '@spartan-ng/ui-separator-brain';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import {HlmButtonDirective} from '@spartan-ng/ui-button-helm';
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
    HlmButtonDirective,
  ],
  templateUrl: './calender-component.component.html',
  styleUrl: './calender-component.component.css',
})
export class CalenderComponentComponent {
  date: any;
}
