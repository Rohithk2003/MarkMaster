import { Component } from '@angular/core';
import { Page1Component } from '../../Components/page1/page1.component';
import { Page2Component } from '../../Components/page2/page2.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [Page1Component, Page2Component],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
