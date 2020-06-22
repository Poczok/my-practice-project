import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { isNil } from '../../utils/type-guard/is-nil';

export function fileExtensionValidatorForFileInput(...validExtensions: string[]): ValidatorFn {
  return (control: FormControl): ValidationErrors | null => {
    let error = false;
    if (
      !isNil(control) &&
      !isNil(validExtensions) &&
      !isNil(control.value) &&
      Array.isArray(control.value.files) &&
      control.value.files.length > 0
    ) {
      error = control.value.files.some(file => !validExtensions.includes(file.name.split('.').pop()));
    }
    return error ? { fileExtension: { validExtensions: validExtensions.join(', ') } } : null;
  };
}
