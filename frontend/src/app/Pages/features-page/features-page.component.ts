import { Component } from '@angular/core';
import { FeaturesComponent } from '../../Components/features/features.component';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { FooterComponent } from "../../Components/footer/footer.component";

@Component({
  selector: 'app-features-page',
  standalone: true,
  imports: [FeaturesComponent, NavbarComponent, FooterComponent],
  templateUrl: './features-page.component.html',
  styleUrl: './features-page.component.css',
})
export class FeaturesPageComponent {}
