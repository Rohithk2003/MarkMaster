import { Routes } from '@angular/router';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { FeaturesPageComponent } from './Pages/features-page/features-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ErrorComponent } from './Components/error/error.component';
import { StudentDetailsPageComponent } from './Pages/student-details-page/student-details-page.component';
import { DashboardLayoutComponent } from './Components/dashboard/dashboard-layout/dashboard-layout.component';
import { SearchResultsComponent } from './Components/search-results/search-results.component';
import { MarksComponentComponent } from './Components/dashboard/data-components/marks-component/marks-component.component';

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
    path: 'contact',
    component: ContactPageComponent,
  },

  {
    path: 'dashboard',
    component: DashboardLayoutComponent,

    children: [
      {
        path: 'student-details',
        component: StudentDetailsPageComponent,
      },
      {
        path: 'marks-data',
        component: MarksComponentComponent,
      },
      {
        path: '',
        component: DashboardComponent,
      },
    ],
  },

  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'search',
    component: SearchResultsComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
