import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { BaseService } from './baseService.service';
import { API, Batch, Course, Student } from '../Types/types';
import { AuthService } from './auth.service';

interface StudentType extends API {
  data: Student[];
}
export interface CreateStudentDTO {
  student: Student;
  courses: Course[];
  batches: Batch;
}
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private authService: AuthService;
  private baseService: BaseService;
  accessToken: string | undefined;
  constructor() {
    this.authService = new AuthService();
    this.baseService = new BaseService();
    this.accessToken = this.authService.getAccessToken();
  }
  async getStudents(): Promise<StudentType> {
    let res = this.baseService.apiClient.get('/student/all', {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    return (await res).data;
  }
  async createStudent(data: CreateStudentDTO): Promise<API> {
    const res = await this.baseService.apiClient.post('/student/', data, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    return res.data;
  }
  async deleteStudent(id: number) {
    try {
      const res = await this.baseService.apiClient.delete(`/student/${id}`);
      if (res.status === 204 || res.status == 200) {
        alert('Success');
      } else {
        alert('Could not delete student');
      }
    } catch (e) {
      alert('Could not delete student.');
    }
  }
}
