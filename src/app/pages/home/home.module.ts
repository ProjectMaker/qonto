import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { routes, navigatableComponents } from './home.routes';

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  declarations: [
    ...navigatableComponents
  ],
  providers: [

  ]
})
export class HomeModule { }