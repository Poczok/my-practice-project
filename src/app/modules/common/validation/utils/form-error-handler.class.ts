import { AbstractControl } from '@angular/forms';

export class FormErrorHandler {
  public static removeError(control: AbstractControl, error: string) {
    const err = control?.errors;
    if (err) {
      delete err[error]; // delete your own error
      if (!Object.keys(err).length) {
        // if no errors left
        control.setErrors(null); // set control errors to null making it VALID
      } else {
        control.setErrors(err); // controls got other errors so set them back
      }
    }
  }

  public static addError(control: AbstractControl, error: string) {
    let err = control?.errors; // get control errors
    if (err) {
      err[error] = true;
    } else {
      err = { [error]: true };
    }
    control.setErrors(err);
    control.markAsTouched();
  }
}
