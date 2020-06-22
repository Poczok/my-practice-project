import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstFormComponent } from './modules/first-form/first-form.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationModule } from './modules/common/validation/validation.module';
import { VALIDATION_MESSAGES } from './modules/common/validation/validation.token';
import { validationMessages } from './modules/common/validation/model/validation-messages';
import { NgxMaskModule } from 'ngx-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  FunctionButtonModule,
  InputModule,
  SvgButtonModule,
  TextareaModule,
} from 'ep-saas-component-library';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SecondFormComponent } from './modules/second-form/second-form.component';
import { NestedFormOneComponent } from './modules/second-form/nested-form-one/nested-form-one.component';
import { NestedFormTwoComponent } from './modules/second-form/nested-form-two/nested-form-two.component';
import { EditEmployeeComponent } from './modules/second-form/nested-form-one/components/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './modules/second-form/nested-form-one/components/view-employee/view-employee.component';
import { ApiErrorModule } from './modules/common/api-error/api-error.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    FirstFormComponent,
    LandingPageComponent,
    SecondFormComponent,
    NestedFormOneComponent,
    NestedFormTwoComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FunctionButtonModule,
    NgbModule,
    ReactiveFormsModule,
    InputModule,
    ValidationModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'hu',
    }),
    InputModule,
    TextareaModule,
    MatFormFieldModule,
    SvgButtonModule,
    ApiErrorModule
  ],
  providers: [
    {
      provide: VALIDATION_MESSAGES,
      useValue: validationMessages,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
