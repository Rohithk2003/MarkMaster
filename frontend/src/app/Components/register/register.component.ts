import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgOptimizedImage, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  clicked = false;
  email = '';
  password = '';
  confirmPassword = '';
  error = '';

  constructor(private router: Router) {}

  async handleSubmit(event: Event) {
    event.preventDefault();

    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }

    try {
      this.clicked = true;
      const response = await axios.post('http://localhost:3000/auth/register', {
        username: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      });

      if (response.data) {
        // Registration successful, redirect to login
        alert('Success.Your account has been created.');
        this.router.navigate(['/login']);
      }
    } catch (err: any) {
      this.error = err.response?.data?.message || 'Registration failed';
    } finally {
      this.clicked = false;
    }
  }
}
