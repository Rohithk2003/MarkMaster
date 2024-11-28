import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnSeparatorComponent } from '@spartan-ng/ui-separator-brain';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { Router } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Student } from '../../../../Types/types';
import { StudentService } from '../../../../Services/student.service';
@Component({
  selector: 'app-students-data-complete-component',
  standalone: true,
  imports: [
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    CommonModule,
    NgApexchartsModule,
    DialogModule,
    HlmSeparatorDirective,
    BrnSeparatorComponent,
    HlmButtonDirective,
  ],
  templateUrl: './students-data-complete-component.component.html',
  styleUrl: './students-data-complete-component.component.css',
})
export class StudentsDataCompleteComponentComponent {
  visible: boolean = false;
  studentService: StudentService;
  headers = [
    'First Name',
    'Last Name',
    'Age',
    'Email',
    'Roll Number',
    'DOB',
    'Batch',
  ];
  studentsData: Student[] = [];
  filteredStudentsData: Student[] = [];
  showDialog() {
    this.visible = true;
  }
  constructor(private router: Router) {
    this.studentService = new StudentService();
    this.loadStudents();
  }

  async loadStudents() {
    const studentData = await this.studentService.getStudents();
    this.studentsData = studentData.data;
    this.filteredStudentsData = this.studentsData;
  }
  handleSearchApi() {
    const queryData = this.query.getRawValue();
    if (queryData != null) {
      this.updateQueryParams(queryData);
      this.filteredStudentsData = this.studentsData.filter(
        (item) =>
          item.firstName.includes(queryData) ||
          item.lastName.includes(queryData),
      );
    } else {
      this.studentsData = this.studentsData;
    }
  }
  updateQueryParams(queryString: string | null) {
    if (queryString)
      this.router.navigate([], {
        queryParams: {
          query: queryString,
        },
        queryParamsHandling: 'merge',
      });
    else
      this.router.navigate([], {
        queryParams: {
          query: null,
        },
        queryParamsHandling: 'merge',
      });
  }
  query = new FormControl('');
  createRouteLink(id: number) {
    this.router.navigate([`/dashboard/edit-student/${id}`]);
  }
  deleteStudent(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id);
    }
  }
}
