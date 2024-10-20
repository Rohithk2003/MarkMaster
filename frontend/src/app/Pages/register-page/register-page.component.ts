import { Component } from '@angular/core';
import {RegisterComponent} from '../../Components/register/register.component';
import {NavbarComponent} from '../../Components/navbar/navbar.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    RegisterComponent,
    NavbarComponent
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

}
