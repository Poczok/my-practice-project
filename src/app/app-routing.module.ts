import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstFormComponent} from './modules/first-form/first-form.component';
import {LandingPageComponent} from './modules/landing-page/landing-page.component';
import {SecondFormComponent} from './modules/second-form/second-form.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'first', component: FirstFormComponent},
  { path: 'second', component: SecondFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
