import { Component } from '@angular/core';
import { ContactComponent } from '../../Components/contact/contact.component';
import { NavbarComponent } from '../../Components/navbar/navbar.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactComponent, NavbarComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
})
export class ContactPageComponent {}
