import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { TransactionAttachmentPipe } from './transaction.pipe';

@NgModule({
  declarations: [
    TransactionAttachmentPipe,
  ],
  imports: [

  ],
  providers: [
  ],
  exports: [
    TransactionAttachmentPipe
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PipeModule {}
