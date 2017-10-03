import { Routes } from '@angular/router';

import { HomeComponent } from './components/home.component';
export const routes:Routes = [
  { path: '', component: HomeComponent }
];

export const navigatableComponents = [
  HomeComponent
];