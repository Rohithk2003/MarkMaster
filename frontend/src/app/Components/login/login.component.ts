import { Component, Injectable } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
@Injectable({ providedIn: 'root' })
export class LoginComponent {
  username = new FormControl('');
  password = new FormControl('');
  redirect = '';
  clicked = false;
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private activateRouter: ActivatedRoute,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.activateRouter.queryParams.subscribe((params) => {
      this.redirect = params['redirect'] || '/dashboard';
    });
  }
  async onLogin(): Promise<void> {
    try {
      const username = this.username.getRawValue();
      const password = this.password.getRawValue();
      if (!username || !password) {
        alert('Please fill in both fields.');
        return;
      }
      await this.authService.login(username, password);
      alert('Login successful!');
      if (this.redirect) {
        this.router.navigate([this.redirect]);
        return;
      }
      this.router.navigate(['/dashboard ']);
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  }

  onLogout(): void {
    this.authService.logout();
    alert('Logged out!');
  }
}
