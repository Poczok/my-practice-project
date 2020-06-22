import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { isNil } from '../../utils/type-guard/is-nil';
import { AppErrorStateMatcher } from '../error-state-matcher';

@Directive({
  selector: '[appErrorStateSelect]'
})
export class ErrorStateSelectDirective implements OnChanges {
  @Input() isSubmitted: boolean;
  matcher = new AppErrorStateMatcher();
  constructor(private _input: MatSelect) {
    this._input.errorStateMatcher = this.matcher;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!isNil(changes.isSubmitted) && !isNil(changes.isSubmitted.currentValue)) {
      this.matcher.setSubmitted(changes.isSubmitted.currentValue);
    }
  }
}
