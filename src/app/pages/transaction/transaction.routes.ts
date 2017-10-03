import { Routes } from '@angular/router';

import { ListComponent } from './list/components/list.component';
export const routes:Routes = [
  { path: 'transactions', component: ListComponent }
];

export const navigatableComponents = [
  ListComponent
];