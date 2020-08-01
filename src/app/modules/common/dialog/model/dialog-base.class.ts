import { MatDialogRef } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { untilDestroyed } from '@ngneat/until-destroy';

export class DialogBase {
  constructor(protected dialogRef: MatDialogRef<any>) {
    dialogRef
      .keydownEvents()
      .pipe(
        filter((e: KeyboardEvent) => e.code === 'Escape' || e.key === 'Escape'),
        untilDestroyed(this)
      )
      .subscribe((e: KeyboardEvent) => {
        e.preventDefault();
        e.stopPropagation();
        dialogRef.close(false);
      });
  }
}
