import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../../../services/modal.service';
import { IRaceTable } from '../../model/race-table.interface';
import { BasicDataService } from 'src/app/modules/services/basic-data.service';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';

@Component({
  selector: 'app-modal-list',
  templateUrl: './modal-list.component.html',
  styleUrls: ['./modal-list.component.scss'],
  providers: [ModalService, BasicDataService],
})
@UntilDestroy()
export class ModalListComponent implements OnInit {
  private _clickCounter = 0;
  private _raceResults: IRaceTable[];
  constructor(
    private _modalService: ModalService,
    private _basicDataService: BasicDataService
  ) {}

  ngOnInit(): void {
    this._basicDataService
      .getRaceResults()
      .pipe(untilDestroyed(this))
      .subscribe((raceResults) => {
        this._raceResults = raceResults;
      });
  }
  openModal() {
    console.log('open');
    this._clickCounter++;
    this._modalService.openTestDialog(
      this._clickCounter.toString(),
      this._raceResults
    );
  }
}
