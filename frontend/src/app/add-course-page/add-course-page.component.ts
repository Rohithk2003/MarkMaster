import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from '../Services/baseService.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-course-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css'],
})
export class AddCoursePageComponent {
  courseName: string = '';
  courseCode: string = '';
  departments: any[] = [];
  selectedDepartment: number | null = null;

  constructor(
    private router: Router,
    private baseService: BaseService,
  ) {}

  async ngOnInit() {
    await this.loadDepartments();
  }

  async loadDepartments() {
    try {
      const response = await this.baseService.apiClient.get('/department/all');
      this.departments = response.data.data; // Adjust based on your API response structure
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  }

  async onSubmit() {
    if (this.courseName && this.courseCode && this.selectedDepartment) {
      const courseData = {
        course: {
          courseName: this.courseName,
          courseFullName: this.courseName,
          courseCode: this.courseCode,
        },
        department: this.departments.find(
          (item) =>
            item.id === parseInt(this.selectedDepartment?.toString() ?? ''),
        ),
      };

      try {
        const res = await this.baseService.apiClient.post(
          '/course/',
          courseData,
        );
        if (res.status === 201 || res.status == 200) {
          this.router.navigate(['/dashboard']);
        }
      } catch (error) {
        console.error('Error adding course:', error);
      }
    } else {
      // Handle validation error (e.g., show message to fill all fields)
    }
  }
}
