import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { pipes } from './pipes';

@NgModule({
  declarations: [
    ...pipes,
  ],
  imports: [
    
  ],
  providers: [
  ],
  exports: [
    ...pipes
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PipeModule {}
