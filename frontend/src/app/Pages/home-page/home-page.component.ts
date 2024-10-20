import { Component } from '@angular/core';
import {HeroComponent} from "../../Components/hero/hero.component";
import {NavbarComponent} from "../../Components/navbar/navbar.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
    imports: [
        HeroComponent,
        NavbarComponent
    ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
