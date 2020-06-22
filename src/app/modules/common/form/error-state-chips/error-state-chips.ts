import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatChipList } from '@angular/material/chips';
import { isNil } from '../../utils/type-guard/is-nil';
import { AppErrorStateMatcher } from '../error-state-matcher';

@Directive({
  selector: '[appErrorStateChips]'
})
export class ErrorStateChipsDirective implements OnChanges {
  @Input() isSubmitted: boolean;
  matcher = new AppErrorStateMatcher();
  constructor(private _input: MatChipList) {
    this._input.errorStateMatcher = this.matcher;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!isNil(changes.isSubmitted) && !isNil(changes.isSubmitted.currentValue)) {
      this.matcher.setSubmitted(changes.isSubmitted.currentValue);
    }
  }
}
