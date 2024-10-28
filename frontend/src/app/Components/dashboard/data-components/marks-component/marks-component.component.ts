import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { DropdownModule } from 'primeng/dropdown';
import { SelectionModel } from '@angular/cdk/collections';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

interface Student {
  name: string;
  class: string;
  math: number;
  science: number;
  english: number;
  history: number;
}

const STUDENT_DATA: Student[] = [
  {
    name: 'Alice Johnson',
    class: '10A',
    math: 85,
    science: 92,
    english: 78,
    history: 88,
  },
  {
    name: 'Bob Smith',
    class: '10B',
    math: 72,
    science: 80,
    english: 90,
    history: 75,
  },
  {
    name: 'Charlie Brown',
    class: '10A',
    math: 95,
    science: 88,
    english: 82,
    history: 91,
  },
  {
    name: 'Diana Ross',
    class: '10C',
    math: 68,
    science: 75,
    english: 88,
    history: 79,
  },
  {
    name: 'Edward Norton',
    class: '10B',
    math: 90,
    science: 93,
    english: 85,
    history: 87,
  },
];

@Component({
  selector: 'app-marks-component',
  standalone: true,
  imports: [
    DropdownModule,
    ProgressBarModule,
    ToastModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    CommonModule,
  ],
  templateUrl: './marks-component.component.html',
  styleUrl: './marks-component.component.css',
})
export class MarksComponentComponent implements OnInit {
  [x: string]: any;
  @ViewChild('chart')
  d = STUDENT_DATA;
  dataSource = new MatTableDataSource<Student>(STUDENT_DATA);
  selection = new SelectionModel<Student>(true, []);
  selectedCourse = 'CSE A';
  courses = [
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
  displayedColumns: string[] = [
    'select',
    'name',
    'class',
    'math',
    'science',
    'english',
    'history',
    'options',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row: any) => this.selection.select(row));
  }

  toggleSorting(sort: any) {
    this.dataSource.sortData = (data: any, sort: any) => {
      return data.sort((a: any, b: any) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'math':
            return this.compare(a.math, b.math, isAsc);
          case 'science':
            return this.compare(a.science, b.science, isAsc);
          case 'english':
            return this.compare(a.english, b.english, isAsc);
          case 'history':
            return this.compare(a.history, b.history, isAsc);
          default:
            return 0;
        }
      });
    };
    this.dataSource.sort = sort;
  }
  toggleSelection(row: any) {
    this.selection.toggle(row);
  }
  compare(a: number, b: number, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  calculateAverageMarks() {
    const totalMarks = this.dataSource.data.reduce(
      (acc: any, student: Student) => {
        return (
          acc +
          student.math +
          student.science +
          student.english +
          student.history
        );
      },
      0,
    );
    return (totalMarks / (this.dataSource.data.length * 4)).toFixed(2);
  }

  highestMark() {
    return Math.max(
      ...this.dataSource.data.flatMap((student: Student) => [
        student.math,
        student.science,
        student.english,
        student.history,
      ]),
    );
  }

  lowestMark() {
    return Math.min(
      ...this.dataSource.data.flatMap((student: Student) => [
        student.math,
        student.science,
        student.english,
        student.history,
      ]),
    );
  }

  copyStudentId(id: string) {
    navigator.clipboard.writeText(id);
    alert(`Copied student ID: ${id}`);
  }
}
