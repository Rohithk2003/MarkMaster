import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { Batch, Course, Student } from '../../Types/types';
import {
  StudentService,
  CreateStudentDTO,
} from '../../Services/student.service';
import { BaseService } from '../../Services/baseService.service';
import { Router, ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    MultiSelectModule,
    DropdownModule,
  ],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
})
export class AddStudentComponent implements OnInit {
  studentForm: FormGroup;
  courses: Course[] = [];
  batches: Batch[] = [];
  loading = false;
  isEditMode = false;
  studentId: number | null = null;
  selectedBatch: Batch | null = null;
  selectedCourses: Course[] = [];

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private baseService: BaseService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(0)]],
      rollNo: ['', Validators.required],
      dob: ['', Validators.required],
      batch: [null, Validators.required],
      courses: [[], Validators.required],
    });
  }

  async ngOnInit() {
    try {
      this.loading = true;

      // Check if we're in edit mode
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.isEditMode = true;
        this.studentId = parseInt(id);
      }

      // Fetch courses and batches
      await this.fetchCoursesAndBatches();

      // If in edit mode, fetch student data
      if (this.isEditMode && this.studentId) {
        await this.fetchStudentData(this.studentId);
      }
    } catch (error) {
      console.error('Error during initialization:', error);
    } finally {
      this.loading = false;
    }
  }

  private async fetchCoursesAndBatches() {
    try {
      // Fetch courses
      const coursesResponse =
        await this.baseService.apiClient.get('/course/all');
      this.courses = coursesResponse.data.data;

      // Fetch batches
      const batchesResponse =
        await this.baseService.apiClient.get('/batch/all');
      this.batches = batchesResponse.data.data;
    } catch (error) {
      console.error('Error fetching courses and batches:', error);
      throw error;
    }
  }

  private async fetchStudentData(studentId: number) {
    try {
      const response = await this.baseService.apiClient.get(
        `/student/${studentId}`,
      );

      const studentData = response.data.data;

      // Convert date string to Date object for the calendar
      const dob = studentData.dob ? new Date(studentData.dob) : null;

      // Find the matching batch from the batches array
      this.selectedBatch =
        this.batches.find((b) => b.id === studentData.batch.id) || null;

      // Find the matching courses from the courses array
      this.selectedCourses = this.courses.filter((c) =>
        studentData.courses.some((sc: Course) => sc.id === c.id),
      );

      // Update form with student data
      this.studentForm.patchValue({
        firstName: studentData.firstName,
        lastName: studentData.lastName,
        email: studentData.email,
        age: studentData.age,
        rollNo: studentData.rollNo,
        dob: dob,
        batch: this.selectedBatch,
        courses: this.selectedCourses,
      });
    } catch (error) {
      console.error('Error fetching student data:', error);
      throw error;
    }
  }

  // Helper method to compare batches for select
  compareBatches(batch1: Batch | null, batch2: Batch | null): boolean {
    return batch1?.id === batch2?.id;
  }

  // Helper method to compare courses for select
  compareCourses(course1: Course, course2: Course): boolean {
    return course1?.id === course2?.id;
  }

  // Helper method to handle batch selection
  onBatchChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    const batchId = parseInt(select.value);
    const selectedBatch = this.batches.find((b) => b.id === batchId);
    this.studentForm.patchValue({ batch: selectedBatch });
  }

  // Helper method to handle course selection
  onCoursesChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    const selectedOptions = Array.from(select.selectedOptions);
    const selectedCourseIds = selectedOptions.map((option) =>
      parseInt(option.value),
    );
    const selectedCourses = this.courses.filter((c) =>
      selectedCourseIds.includes(c.id),
    );
    this.studentForm.patchValue({ courses: selectedCourses });
  }

  async onSubmit() {
    if (this.studentForm.valid) {
      try {
        const formValue = this.studentForm.value;
        const student: Student = {
          firstName: formValue.firstName,
          lastName: formValue.lastName,
          email: formValue.email,
          age: formValue.age,
          rollNo: formValue.rollNo,
          dob: formValue.dob,
          id: this.isEditMode ? this.studentId : 0,
          batch: formValue.batch,
          course: formValue.courses,
        };

        const studentData: CreateStudentDTO = {
          student: student,
          courses: formValue.courses,
          batches: formValue.batch,
        };

        if (this.isEditMode && this.studentId) {
          // Update existing student
          await this.baseService.apiClient.put(
            `/student/${this.studentId}`,
            studentData,
          );
        } else {
          // Create new student
          await this.studentService.createStudent(studentData);
        }

        // Navigate back to student list
        this.router.navigate(['/dashboard/student-details']);
      } catch (error) {
        console.error('Error saving student:', error);
        // Handle error (e.g., show error message)
      }
    }
  }

  // Helper method to check if a course is selected
  isCourseSelected(course: Course): boolean {
    const selectedCourses = this.studentForm.get('courses')?.value || [];
    return selectedCourses.some((c: Course) => c.id === course.id);
  }

  // Helper method to format date for display
  formatDate(date: string | Date): string {
    if (!date) return '';
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  }

  // Navigate back to student list
  cancel() {
    this.router.navigate(['/dashboard/student-details']);
  }

  closeDialog() {
    // Implement close dialog logic
  }

  isSelectedCourse(courseId: number): boolean {
    return this.selectedCourses.some((course) => course.id === courseId);
  }
}
