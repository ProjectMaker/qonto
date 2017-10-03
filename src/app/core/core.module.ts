import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_SERVICES } from './services';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ],
  providers: [
    ...APP_SERVICES
  ]
})
export class CoreModule {}
