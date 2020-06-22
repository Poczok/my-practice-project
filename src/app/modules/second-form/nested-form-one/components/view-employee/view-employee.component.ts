import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IEmployee} from '../../../../model/employee.interface';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {
  @Input()
  public employee: IEmployee;
  @Output()
  public editedEmployeeIdEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}

  public edit(editId: string) {
    this.editedEmployeeIdEmitter.emit(editId);
  }
}
