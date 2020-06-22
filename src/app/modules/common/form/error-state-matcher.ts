import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

export class AppErrorStateMatcher implements ErrorStateMatcher {
  private _submitted = false;
  constructor() {}
  public isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched || this._submitted));
  }
  public setSubmitted(submitted: boolean) {
    this._submitted = submitted;
  }
}
