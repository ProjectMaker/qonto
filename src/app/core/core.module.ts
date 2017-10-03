import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_SERVICES } from './services';
import { PipeModule } from './pipes/pipes.module';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  imports: [
    RouterModule,
    PipeModule,
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
