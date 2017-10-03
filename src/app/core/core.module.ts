import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_SERVICES } from './services';
import { NavComponent } from './components/nav/nav.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [
    NavComponent,
    LayoutComponent
  ],
  exports: [
    NavComponent,
    LayoutComponent
  ],
  providers: [
    ...APP_SERVICES
  ]
})
export class CoreModule {}
