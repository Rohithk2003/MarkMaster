import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './Components/navbar/navbar.component';
import {HeroComponent} from './Components/hero/hero.component';
import {LoginPageComponent} from './Pages/login-page/login-page.component';
import {HomePageComponent} from './Pages/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, LoginPageComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
