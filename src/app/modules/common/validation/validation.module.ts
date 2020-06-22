import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationComponent } from './validation/validation.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ValidationComponent],
  imports: [CommonModule, TranslateModule],
  exports: [ValidationComponent]
})
export class ValidationModule {}
