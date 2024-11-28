import { Injectable } from '@angular/core';
import Cookies from 'universal-cookie';
import axios, { AxiosInstance } from 'axios';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private cookies = new Cookies();
  private apiClient: AxiosInstance;
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'http://localhost:3000/auth',
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  /**
   * Perform login by setting cookies for access and refresh tokens
   * @param accessToken - Access token from API
   * @param refreshToken - Refresh token from API
   */
  async login(username: string, password: string) {
    try {
      const response = await this.apiClient.post('/login', {
        username,
        password,
      });
      const { data } = await response.data;
      this.cookies.set('sessionid', data, {
        path: '/',
        secure: true, // Set to true if using HTTPS
        sameSite: 'strict',
        maxAge: 3600, // 1 hour
      });

      this.cookies.set('refresh', data, {
        path: '/',
        secure: true,
        sameSite: 'strict',
        maxAge: 7 * 24 * 3600, // 7 days
      });

      console.log('Tokens set successfully in cookies');
    } catch (error) {
      console.error('Login failed', error);
      throw error; // Re-throw error for the caller to handle
    }
  }

  /**
   * Logout by clearing cookies
   */
  logout(): void {
    this.cookies.remove('sessionid', { path: '/' });
    this.cookies.remove('refresh', { path: '/' });
    console.log('Cookies cleared');
  }

  /**
   * Retrieve access token
   * @returns {string | undefined} Access token
   */
  getAccessToken(): string | undefined {
    return this.cookies.get('sessionid');
  }
  checkIfAccessTokenExpired(): boolean {
    const accessToken = this.getAccessToken();
    if (!accessToken) {
      return true;
    }
    const decodedToken = jwtDecode(accessToken);
    if (!decodedToken) {
      return true;
    }
    if (!decodedToken.exp) {
      return false;
    }
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  }
  /**
   * Check if the user is authenticated
   * @returns {boolean} True if access token exists
   */
  isAuthenticated(): boolean {
    let expired = this.checkIfAccessTokenExpired();
    if (expired) {
      this.logout();
    }
    return !!this.getAccessToken();
  }
}
