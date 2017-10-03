import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { pipes } from './pipes';

@NgModule({
  declarations: [
    ...pipes,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    FormsModule,
    CommonModule,
    ...pipes
  ]
})
export class SharedModule { }

