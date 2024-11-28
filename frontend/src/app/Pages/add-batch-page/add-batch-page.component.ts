import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from '../../Services/baseService.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-batch-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-batch-page.component.html',
  styleUrl: './add-batch-page.component.css',
})
export class AddBatchPageComponent {
  batchName: string = '';

  constructor(
    private router: Router,
    private baseService: BaseService,
  ) {}

  async onSubmit() {
    if (this.batchName) {
      try {
        const batchData = { batch: this.batchName };
        const res = await this.baseService.apiClient.post('/batch/', batchData);
        if (res.status === 201 || res.status == 200) {
          this.router.navigate(['/dashboard']); // Redirect to the dashboard or another page
        }
      } catch (error) {
        console.error('Error adding batch:', error);
      }
    } else {
      alert('Something happened');
    }
  }
}
