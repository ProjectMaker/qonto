import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';

@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [
    NavComponent
  ],
  exports: [
    NavComponent
  ],
  providers: [

  ]
})
export class CoreModule {}
