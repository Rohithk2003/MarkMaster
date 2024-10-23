import { Component, Injectable } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { backendUrl } from '../../../../lib/vars';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
@Injectable({ providedIn: 'root' })
export class LoginComponent {
  username = new FormControl('');
  password = new FormControl('');
  constructor(private http: HttpClient) {}
  async onSubmit() {
    console.log('Username: ' + this.username.value);
    console.log('Password: ' + this.password.value);
    // const res = await fetch(, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username: this.username.value,
    //     password: this.password.value,
    //   }),
    // });
    this.http
      .post(`http://127.0.0.1:3000/auth/login`, {
        username: this.username.value,
        password: this.password.value,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
