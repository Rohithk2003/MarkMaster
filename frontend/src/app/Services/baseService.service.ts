import { Injectable } from '@angular/core';
import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  public apiClient: AxiosInstance;
  private authService: AuthService;
  private router: Router;
  constructor() {
    this.authService = new AuthService();
    this.router = new Router();
    // Create the Axios instance
    this.apiClient = axios.create({
      baseURL: 'http://localhost:3000/api',
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request Interceptor
    this.apiClient.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = this.authService.getAccessToken();

        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
      },
      (error) => Promise.reject(error),
    );

    // Response Interceptor
    this.apiClient.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => this.handleError(error),
    );
  }

  private handleError(error: AxiosError): Promise<any> {
    if (
      error.response?.status === 401 ||
      error.response?.status === 403 ||
      error.response?.status === 500
    ) {
      const t: any = error.response.data;
      const message: string = t.message;
      if (message.toLowerCase().includes('jwt')) {
        const currentUrl = this.router.url; // Get the current URL

        // Clear the invalid token from local storage
        this.authService.logout();

        // Redirect to login page with redirect query param
        this.router.navigate(['/login']);
      }
    }
    if (error.response?.status === 302) {
      const currentUrl = this.router.url; // Get the current URL

      // Clear the invalid token from local storage
      this.authService.logout();

      // Redirect to login page with redirect query param
      this.router.navigate(['/login']);
    }

    // Pass the error to the next handler
    return Promise.reject(error);
  }
}
