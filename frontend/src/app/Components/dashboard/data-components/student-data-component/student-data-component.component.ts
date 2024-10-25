import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-student-data-component',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: 'student-data-component.component.html',
})
export class StudentDataComponent {
  products = [
    {
      id: '1000',
      code: 'x9f0k3p1',
      name: 'Product 1',
      description: 'Product Description',
      image: 'product-1.jpg',
      price: 55,
      category: 'Electronics',
      quantity: 33,
      inventoryStatus: 'INSTOCK',
      rating: 4,
    },
    {
      id: '1001',
      code: 'f2g5h7k9',
      name: 'Product 2',
      description: 'Product Description',
      image: 'product-2.jpg',
      price: 87,
      category: 'Accessories',
      quantity: 11,
      inventoryStatus: 'LOWSTOCK',
      rating: 3,
    },
  ];
}
