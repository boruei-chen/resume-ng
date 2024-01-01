import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstCharPipe } from './pipes/first-char/first-char.pipe';
import { DateCountDirective } from './directives/date-count/date-count.directive';

@NgModule({
  declarations: [
    FirstCharPipe,
    DateCountDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FirstCharPipe,
    DateCountDirective
  ]
})
export class CoreModule { }
