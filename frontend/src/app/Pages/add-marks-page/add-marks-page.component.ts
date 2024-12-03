import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../Services/student.service';
import { BaseService } from '../../Services/baseService.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Course, Student } from '../../Types/types';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-marks-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-marks-page.component.html',
  styleUrls: ['./add-marks-page.component.css'],
})
export class AddMarksPageComponent implements OnInit {
  students: any[] = [];
  exams: any[] = [];
  courses: any[] = [];
  selectedStudent: Student | null = null;
  selectedExam: {
    id: number;
    name: string;
  } | null = null;
  selectedCourse: number = 0;
  mark: number | null = null;

  constructor(
    private studentService: StudentService,
    private baseService: BaseService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadStudents();
    this.loadExams();
    this.loadCourses();
  }

  async loadStudents() {
    const response = await this.studentService.getStudents();
    this.students = response.data;
  }

  async loadExams() {
    this.exams = [
      {
        name: 'Midterm Exam',
        id: 1,
      },
      {
        name: 'Final Exam',
        id: 2,
      },
    ];
  }

  async loadCourses() {
    const response = await this.baseService.apiClient.get('/course/all');
    this.courses = response.data.data;
  }

  async onSubmit() {
    // if (
    //   this.selectedStudent &&
    //   this.selectedExam &&
    //   this.mark &&
    //   this.selectedCourse
    // ) {
    console.log(this.selectedStudent);

    const formData = new FormData();
    let studentData = this.students.find(
      (item) => item.id == this.selectedStudent,
    );
    let examData = this.exams.find((item) => item.id == this.selectedExam);
    let courseData = this.courses.find(
      (item) => item.id === parseInt(this.selectedCourse.toString()),
    );
    const markData = {
      student: studentData,
      exam: examData,
      mark: this.mark,
      course: courseData,
      id: Math.floor(Math.random() * (1000000 - 10 + 1)) + 10,
    };
    const res = await this.baseService.apiClient.post(
      '/student/mark/',
      markData,
    );
    if (res.status == 201 || res.status == 200) {
      this.router.navigate(['/dashboard/marks-data']);
    }
    // }
  }
}
