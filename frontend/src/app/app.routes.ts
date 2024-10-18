import { Routes } from '@angular/router';
import { Page1Component } from './Components/page1/page1.component';
import { Page2Component } from './Components/page2/page2.component';
import { MainComponent } from './Pages/main/main.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: '',
    redirectTo: 'new-page',
    pathMatch: 'full',
  },
];
