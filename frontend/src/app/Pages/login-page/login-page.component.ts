import { Component } from '@angular/core';
import {LoginComponent} from '../../Components/login/login.component';
import {NavbarComponent} from '../../Components/navbar/navbar.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    LoginComponent,
    NavbarComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
