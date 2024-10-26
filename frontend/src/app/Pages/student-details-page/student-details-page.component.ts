import { Component } from '@angular/core';
import { StudentsDataCompleteComponentComponent } from "../../Components/dashboard/data-components/students-data-complete-component/students-data-complete-component.component";

@Component({
  selector: 'app-student-details-page',
  standalone: true,
  imports: [StudentsDataCompleteComponentComponent],
  templateUrl: './student-details-page.component.html',
  styleUrl: './student-details-page.component.css',
})
export class StudentDetailsPageComponent {}
