import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../Services/student.service';
import { BaseService } from '../../../Services/baseService.service';
import { StudentDataComponent } from '../data-components/student-data-component/student-data-component.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-main',
  standalone: true,
  imports: [CommonModule, StudentDataComponent],
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css'],
})
export class DashboardMainComponent implements OnInit {
  averageMarks: number = 0;
  selectedClass: string = '';
  studentSearch: string = '';
  students: any[] = [];
  filteredStudents: any[] = [];

  constructor(
    private studentService: StudentService,
    private baseService: BaseService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.fetchAverageMarks();
    this.loadStudents();
  }

  async fetchAverageMarks() {
    try {
      const response =
        await this.baseService.apiClient.get('/api/student/mark');
      this.averageMarks = response.data.averageMarks;
    } catch (error) {
      console.error('Error fetching average marks:', error);
    }
  }

  async loadStudents() {
    try {
      const response = await this.studentService.getStudents();
      this.students = response.data;
      this.filteredStudents = this.students; // Initialize with all students
    } catch (error) {
      console.error('Error loading students:', error);
    }
  }

  filterStudents() {
    this.filteredStudents = this.students.filter((student) => {
      const matchesClass = this.selectedClass
        ? student.class === this.selectedClass
        : true;
      const matchesSearch = this.studentSearch
        ? student.firstName
            .toLowerCase()
            .includes(this.studentSearch.toLowerCase()) ||
          student.lastName
            .toLowerCase()
            .includes(this.studentSearch.toLowerCase()) ||
          student.rollNo
            .toLowerCase()
            .includes(this.studentSearch.toLowerCase())
        : true;
      return matchesClass && matchesSearch;
    });
  }

  navigateToAddMarks() {
    this.router.navigate(['/dashboard/add-marks']);
  }

  navigateToAddCourse() {
    this.router.navigate(['/dashboard/add-course']);
  }

  navigateToAddBatch() {
    this.router.navigate(['/dashboard/add-batch']);
  }
}
