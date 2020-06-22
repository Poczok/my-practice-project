import { AbstractControl, AbstractControlOptions, AsyncValidatorFn, FormGroup, ValidatorFn } from '@angular/forms';
import { isNil } from '../utils/type-guard/is-nil';

export class MainFormGroup extends FormGroup {
  submitted: boolean;

  defaultValue: any;

  constructor(
    controls: {
      [key: string]: AbstractControl;
    },
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(controls, validatorOrOpts, asyncValidator);
    this.submitted = false;
    this.saveDefaultValue();
  }

  saveDefaultValue() {
    this.defaultValue = { ...this.getRawValue() };
  }

  patchAndSaveDefaultValue(
    value: {
      [key: string]: any;
    },
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
    }
  ) {
    super.patchValue(value, options);
    this.saveDefaultValue();
  }

  resetAndSaveDefaultValue(
    value?: any,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
    }
  ) {
    this.reset(value, options);
    this.saveDefaultValue();
  }

  submit() {
    this.submitted = true;
  }

  reset(
    value?: any,
    opts?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
    }
  ) {
    this.submitted = false;
    super.reset(!isNil(value) ? value : {}, opts);
  }
}
