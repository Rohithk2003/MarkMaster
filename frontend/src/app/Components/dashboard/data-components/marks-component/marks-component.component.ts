import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../../../../Services/student.service';
import { BaseService } from '../../../../Services/baseService.service';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { BrnSelectImports } from '@spartan-ng/ui-select-brain';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';
import { FilterPipe } from '../../../../filter.pipe';
import { Student } from '../../../../Types/types';
import { Router } from '@angular/router';
import { log } from 'console';

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
    FilterPipe,
  ],
  templateUrl: './marks-component.component.html',
  styleUrl: './marks-component.component.css',
})
export class MarksComponentComponent {
  students: Student[] = [];
  selectedStudent: any;
  marks: any[] = [];
  id: number = 0;
  rollNumberFilter: string = '';
  averageMarks: {
    course: string;
    exam: string;
    mark: number;
    count: number;
    highest: number;
    lowest: number;
  }[] = [];
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient,
    private studentService: StudentService,
    private baseService: BaseService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadStudents();
    this.fetchAllMarks();
  }

  loadStudents(): void {
    this.studentService.getStudents().then((data) => {
      this.students = data.data;
    });
  }
  async fetchAllMarks() {
    const res = await this.baseService.apiClient.get(`/student/mark/`);
    this.marks = res.data.data;
    let u = false;
    this.marks.forEach((item) => {
      let temp = {
        course: item.course.courseName,
        exam: item.exam.examName,
        mark: item.mark,
        highest: item.mark,
        count: 1,
        lowest: item.mark,
      };
      this.averageMarks.forEach((item) => {
        if (item.course === temp.course && item.exam === temp.exam) {
          item.mark += temp.mark;
          item.highest = Math.max(item.highest, temp.mark);
          item.lowest = Math.min(item.lowest, temp.mark);
          item.count += 1;
          u = true;
        }
      });
      if (!u) {
        this.averageMarks.push(temp);
      }
      u = false;
    });
    console.log(this.averageMarks);
  }
  getAverage(examName: any, courseName: any) {
    for (const item of this.averageMarks) {
      if (item.course === courseName && item.exam === examName) {
        return item.mark / item.count;
      }
    }
    return 0;
  }
  getHighest(examName: any, courseName: any) {
    for (const item of this.averageMarks) {
      if (item.course === courseName && item.exam === examName) {
        return item.highest;
      }
    }
    return 0;
  }
  getLowest(examName: any, courseName: any) {
    for (const item of this.averageMarks) {
      if (item.course === courseName && item.exam === examName) {
        return item.lowest;
      }
    }
    return 0;
  }
  async fetchMarks(studentId: number) {
    this.selectedStudent = this.students.find(
      (student) => student.id == studentId,
    );
    const res = await this.baseService.apiClient.get(
      `/student/mark/${studentId}`,
    );
    this.marks = res.data.data;
  }

  onStudentSelect(student: any): void {
    this.selectedStudent = student;
    this.fetchMarks(student.id);
  }

  navigateToAddMarks() {
    this.router.navigate(['/dashboard/add-marks']);
  }
}
