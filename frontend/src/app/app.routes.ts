import { Routes } from '@angular/router';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { FeaturesPageComponent } from './Pages/features-page/features-page.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'sign-up',
    component: RegisterPageComponent,
  },
  {
    path: 'features',
    component: FeaturesPageComponent,
  },
  {
    path: 'pricing',
    component: FeaturesPageComponent,
  },
  {
    path: 'contact',
    component: FeaturesPageComponent,
  },
  {
    path: '',
    component: HomePageComponent,
  },
];
