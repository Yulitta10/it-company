import { Routes } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { CompanyComponent } from './company/company.component';
import { CompanyTeamComponent } from './company-team/company-team.component';

export const routes: Routes = [
  {
    path: '',
    component: GreetingComponent,
  },
  {
    path: 'company',
    component: CompanyComponent,
  },
  {
    path: 'team',
    component: CompanyTeamComponent,
  },
  { path: '**', component: GreetingComponent },
];
