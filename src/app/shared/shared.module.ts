import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PIPES } from './pipes';

@NgModule({
  declarations: [
    ...PIPES
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    FormsModule,
    CommonModule,
    ...PIPES
  ]
})
export class SharedModule { }

