import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isNil } from '../utils/type-guard/is-nil';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-api-error-infobox',
  templateUrl: './api-error-infobox.component.html',
  styleUrls: ['./api-error-infobox.component.scss'],
  providers: [ErrorService]
})
export class ApiErrorInfoBoxComponent implements OnChanges {
  // TODO egy string input, ahova átadható a hibaüzenet szövege ha szükséges
  @Input() err: any;
  @Output() closeErrorBox = new EventEmitter<void>();
  showDelimiter = false;
  translatedErrors: string[] = [];

  constructor(private _errorService: ErrorService, private _translateService: TranslateService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.translatedErrors = [];
    if (!isNil(this.err) && !isNil(this.err.error) && Array.isArray(this.err.error.errors)) {
      this.translatedErrors = this._errorService.getErrorsStringIdList(this.err).map(err => {
        const currentErr = this._translateService.instant('errors.' + err);
        if (currentErr === 'errors.' + err || isNil(err)) {
          return this._translateService.instant('errors.unknown_error');
        }
        return currentErr;
      });
    } else {
      this.translatedErrors.push(this._translateService.instant('errors.unknown_error'));
    }

    this.showDelimiter = Array.isArray(this.translatedErrors) && this.translatedErrors.length > 1;
  }

  closeInfoBox() {
    this.closeErrorBox.emit();
  }
}
