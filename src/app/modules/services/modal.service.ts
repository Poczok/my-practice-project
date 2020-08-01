import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalElementComponent } from '../modal-list/components/modal-element/modal-element.component';
import { IRaceTable } from '../modal-list/model/race-table.interface';

@Injectable()
export class ModalService {
  constructor(private _dialog: MatDialog) {}
  // , callback: (newMargin: number, newMarginComment, recalcMargin)
  // => void)
  public openTestDialog(id: string, raceResults: IRaceTable[]) {
    this._dialog.open(ModalElementComponent, {
      width: '500px',
      height: '400px',
      disableClose: true,
      data: {id, raceResults},
      position: {
        top: '0px',
        left: '150px'
      }
    })
    .afterClosed()
    .subscribe(result => {
      console.log('vege, ' + result, ' id: ', id);
    });
  }
}
