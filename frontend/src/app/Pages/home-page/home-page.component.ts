import { Component } from '@angular/core';
import {HeroComponent} from "../../Components/hero/hero.component";
import {NavbarComponent} from "../../Components/navbar/navbar.component";
import { FeaturesComponent } from "../../Components/features/features.component";
import { ContactComponent } from "../../Components/contact/contact.component";
import { FooterComponent } from "../../Components/footer/footer.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
    imports: [
    HeroComponent,
    NavbarComponent,
    FeaturesComponent,
    ContactComponent,
    FooterComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
