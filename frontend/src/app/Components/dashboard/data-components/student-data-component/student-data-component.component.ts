import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnSeparatorComponent } from '@spartan-ng/ui-separator-brain';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TableModule } from 'primeng/table';
import { Student } from '../../../../Types/types';
import { StudentService } from '../../../../Services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-data-component',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    NgApexchartsModule,
    HlmSeparatorDirective,
    BrnSeparatorComponent,
    HlmButtonDirective,
  ],
  templateUrl: 'student-data-component.component.html',
})
export class StudentDataComponent {
  private studentService: StudentService;
  headers = [
    'First Name',
    'Last Name',
    'Age',
    'Email',
    'Roll Number',
    'DOB',
    'Batch',
  ];
  products: Student[] = [];
  constructor(private router: Router) {
    this.studentService = new StudentService();
    this.loadStudents();
  }

  async loadStudents() {
    const studentData = await this.studentService.getStudents();
    this.products = studentData.data;
  }
 
}
