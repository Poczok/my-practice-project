import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ValidationMessages } from '../model/validation-messages.interface';
import { VALIDATION_MESSAGES } from '../validation.token';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidationComponent implements OnInit {
  constructor(
    @Inject(VALIDATION_MESSAGES) private _defaultMessages: ValidationMessages,
    private _cdr: ChangeDetectorRef
  ) {}

  @Input() messages: ValidationMessages;
  @Input() errors: ValidationErrors | null;

  ngOnInit(): void {
    this.messages = { ...this._defaultMessages, ...this.messages };
    this._cdr.markForCheck();
  }
}
