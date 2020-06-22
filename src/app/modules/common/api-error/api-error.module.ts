import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiErrorInfoBoxComponent } from './api-error-infobox.component';
import { InfoBoxModule } from '../info-box/info-box.module';



@NgModule({
  declarations: [ApiErrorInfoBoxComponent],
  exports: [ApiErrorInfoBoxComponent],
  imports: [
    CommonModule,
    InfoBoxModule
  ]
})
export class ApiErrorModule { }
