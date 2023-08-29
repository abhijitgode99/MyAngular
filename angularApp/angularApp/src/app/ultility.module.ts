import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDirective } from './directive.directive';



@NgModule({
  declarations: [
    DirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DirectiveDirective
  ]
})
export class UltilityModule { }
