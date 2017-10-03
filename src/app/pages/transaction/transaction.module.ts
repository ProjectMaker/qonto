import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { routes, navigatableComponents } from './transaction.routes';
import { PipeModule } from '../../core/pipes/pipes.module';

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes),
    SharedModule,
    PipeModule
  ],
  declarations: [
    ...navigatableComponents
  ],
  providers: [

  ]
})
export class TransactionModule { }