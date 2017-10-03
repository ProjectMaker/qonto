import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_SERVICES } from './services';
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
    ...APP_SERVICES
  ]
})
export class CoreModule {}
