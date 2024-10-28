import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnSeparatorComponent } from '@spartan-ng/ui-separator-brain';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { Router } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-students-data-complete-component',
  standalone: true,
  imports: [
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    CommonModule,
    NgApexchartsModule,
    DialogModule,
    HlmSeparatorDirective,
    BrnSeparatorComponent,
    HlmButtonDirective,
  ],
  templateUrl: './students-data-complete-component.component.html',
  styleUrl: './students-data-complete-component.component.css',
})
export class StudentsDataCompleteComponentComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
  constructor(private router: Router) {}
  oldProducts = [
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
  handleSearchApi() {
    const queryData = this.query.getRawValue();
    if (queryData != null) {
      this.updateQueryParams(queryData);
      this.products = this.oldProducts.filter((item) =>
        item.name.includes(queryData),
      );
    } else {
      this.products = this.oldProducts;
    }
  }
  updateQueryParams(queryString: string | null) {
    if (queryString)
      this.router.navigate([], {
        queryParams: {
          query: queryString,
        },
        queryParamsHandling: 'merge',
      });
    else
      this.router.navigate([], {
        queryParams: {
          query: null,
        },
        queryParamsHandling: 'merge',
      });
  }
  query = new FormControl('');
}
