import { Component, OnInit, Inject } from '@angular/core';
import { DialogBase } from '../../../common/dialog/model/dialog-base.class';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UntilDestroy } from '@ngneat/until-destroy';
import { IRaceTable } from '../../model/race-table.interface';

@UntilDestroy()
@Component({
  selector: 'app-modal-element',
  templateUrl: './modal-element.component.html',
  styleUrls: ['./modal-element.component.scss']
})
export class ModalElementComponent extends DialogBase implements OnInit {
  id: string;
  raceResults: IRaceTable[];
  constructor(
    @Inject(MAT_DIALOG_DATA) private _dialogData: { id: string, raceResults: IRaceTable[] },
    dialogRef: MatDialogRef<ModalElementComponent>
  ) {
    super(dialogRef);
  }

  ngOnInit(): void {
    this.id = this._dialogData.id;
    this.raceResults = this._dialogData.raceResults;
  }

}
