import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { BasicDataService } from '../services/basic-data.service';
import { IComment } from '../model/comments.interface';
import { catchError, switchMap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { of, Subject } from 'rxjs';
import { MainFormGroup } from '../common/form/main-form-group';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss'],
  providers: [BasicDataService]
})
@UntilDestroy()
export class FirstFormComponent implements OnInit, OnDestroy {
  public errors: any;
  public nameControl = new FormControl(null, Validators.required);
  public textControl = new FormControl(null, Validators.required);
  public data: IComment[];
  public form = new MainFormGroup({
    name: this.nameControl,
    body: this.textControl,
  });
  private _refreshList$ = new Subject();
  public viewMode = true;
  private _editedId: number;
  public backOrCancelBtn = 'Back';
  public error: any;

  constructor(
    private _router: Router,
    private _basicDataService: BasicDataService
  ) {}

  ngOnInit(): void {
    this._refreshList$
      .pipe(
        switchMap(() => this._basicDataService.getComments()),
        catchError((error) => {
          this.errors = error;
          return of([]);
        }),
        untilDestroyed(this)
      )
      .subscribe((e: IComment[]) => (this.data = e));
    this._refreshList$.next();
  }

  public backOrCancel() {
    if (!this._editedId) {
      this._router.navigate(['']);
    } else {
      this.viewMode = !this.viewMode;
      this._editedId = null;
      this.form.reset();
      this.backOrCancelBtn = 'Back';
    }
  }
  public save() {
    if (!this.viewMode && this._editedId) {
      this._basicDataService
        .putComment(this.form.getRawValue(), this._editedId)
        .pipe(
          catchError((err) => (this.error = err)),
          untilDestroyed(this)
        )
        .subscribe(() => {
          this._refreshList$.next();
          this.form.reset();
          this.viewMode = !this.viewMode;
          this.backOrCancelBtn = 'Back';
          this._editedId = null;
        });
      return;
    }
    if (this.form.valid) {
      const data = this.form.getRawValue();
      this._basicDataService.postComment(data).subscribe((e: IComment) => {
        this._refreshList$.next();
        this.form.reset();
      });
    }
  }

  public edit(i: number) {
    this.viewMode = !this.viewMode;
    if (!this.viewMode) {
      this.nameControl.patchValue(this.data[i]?.name);
      this.textControl.patchValue(this.data[i]?.body);
      this._editedId = this.data[i]?.id;
      this.backOrCancelBtn = 'Cancel';
      return;
    }
    this._editedId = null;
  }
  public delete(i: number) {
    this._basicDataService
      .deleteComment(i)
      .pipe(
        catchError((err) => (this.error = err)),
        untilDestroyed(this)
      )
      .subscribe(() => this._refreshList$.next());
  }
  ngOnDestroy(): void {}
}
