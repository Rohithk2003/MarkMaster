export interface API {
  data: any;
  message: string;
  status: number;
}
export interface Batch {
  id: number;
  batch: string;
}
export interface Department {
  id: number;
  departmentName: string;
}
export interface Course {
  id: number;
  courseName: string;
  department: Department;
  courseFullName: string;
}
export interface Student {
  id?: number | null;
  firstName: string;
  lastName: string;
  email: string;
  rollNo: string;
  age: number;
  dob: string;
  batch: Batch;
  course: Course[];
}
