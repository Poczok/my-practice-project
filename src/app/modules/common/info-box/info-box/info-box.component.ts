import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { InfoBoxType } from './info-box.type';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoBoxComponent {
  @Input() type: InfoBoxType = 'warning';
  @Input() closeable = true;
  @Output() closeInfoBox = new EventEmitter<void>();
  @ContentChild('templateRef', { static: true }) templateRef: TemplateRef<any>;
  closed = false;

  constructor() {}

  onClose() {
    if (this.closeable) {
      this.closed = true;
      this.closeInfoBox.emit();
    }
  }
}
