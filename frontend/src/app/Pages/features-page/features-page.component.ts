import { Component } from '@angular/core';
import { FeaturesComponent } from '../../Components/features/features.component';
import { NavbarComponent } from '../../Components/navbar/navbar.component';

@Component({
  selector: 'app-features-page',
  standalone: true,
  imports: [FeaturesComponent, NavbarComponent],
  templateUrl: './features-page.component.html',
  styleUrl: './features-page.component.css',
})
export class FeaturesPageComponent {}
