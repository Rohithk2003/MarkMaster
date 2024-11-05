import { Component, Inject, PLATFORM_ID } from '@angular/core';
import {
  BrnProgressComponent,
  BrnProgressIndicatorComponent,
} from '@spartan-ng/ui-progress-brain';
import { HlmProgressIndicatorDirective } from '@spartan-ng/ui-progress-helm';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { HttpClient } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';

import { BrnSelectImports } from '@spartan-ng/ui-select-brain';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';
@Component({
  selector: 'app-marks-component',
  standalone: true,
  imports: [
    ProgressBarModule,
    FormsModule,
    ToastModule,
    BrnSelectImports,
    HlmSelectImports,
    CommonModule,
    BrnProgressComponent,
    BrnProgressIndicatorComponent,
    HlmProgressIndicatorDirective,
  ],
  templateUrl: './marks-component.component.html',
  styleUrl: './marks-component.component.css',
})
export class MarksComponentComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  selectedCourse: string = '';
  courses: any[] = [];
  headers: string[] = [];
  students: any[] = [];
  value = 33;

  ngOnInit(): void {
    this.selectedCourse = 'CSE A';
    this.courses = [
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
    this.headers = [
      'Name',
      'Age',
      'Phone Number',
      'Email',
      'Courses Enrolled',
      'Batch',
    ];
    this.students = [
      {
        name: 'Alice Johnson',
        age: 21,
        phoneNumber: '123-456-7890',
        email: 'alice.johnson@example.com',
        coursesEnrolled: ['Mathematics', 'Physics', 'Computer Science'],
        batch: 'Batch A',
      },
      {
        name: 'Bob Smith',
        age: 22,
        phoneNumber: '234-567-8901',
        email: 'bob.smith@example.com',
        coursesEnrolled: ['Chemistry', 'Biology', 'Mathematics'],
        batch: 'Batch B',
      },
      {
        name: 'Charlie Brown',
        age: 20,
        phoneNumber: '345-678-9012',
        email: 'charlie.brown@example.com',
        coursesEnrolled: ['History', 'English', 'Political Science'],
        batch: 'Batch A',
      },
      {
        name: 'Diana Prince',
        age: 23,
        phoneNumber: '456-789-0123',
        email: 'diana.prince@example.com',
        coursesEnrolled: ['Economics', 'Business Studies', 'Mathematics'],
        batch: 'Batch C',
      },
      {
        name: 'Ethan Hunt',
        age: 24,
        phoneNumber: '567-890-1234',
        email: 'ethan.hunt@example.com',
        coursesEnrolled: ['Engineering', 'Physics', 'Computer Science'],
        batch: 'Batch B',
      },
    ];
  }
}
