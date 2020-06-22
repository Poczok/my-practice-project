import { MatInput } from '@angular/material/input';
import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { isNil } from '../../utils/type-guard/is-nil';
import { AppErrorStateMatcher } from '../error-state-matcher';

@Directive({
  selector: '[appErrorStateInput]'
})
export class ErrorStateInputDirective implements OnChanges {
  @Input() isSubmitted: boolean;
  matcher = new AppErrorStateMatcher();
  constructor(private _input: MatInput) {
    this._input.errorStateMatcher = this.matcher;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!isNil(changes.isSubmitted) && !isNil(changes.isSubmitted.currentValue)) {
      this.matcher.setSubmitted(changes.isSubmitted.currentValue);
    }
  }
}
