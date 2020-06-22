import { Component, Input, OnInit } from '@angular/core';
import { IEmployee } from '../../model/employee.interface';

@Component({
  selector: 'app-nested-form-one',
  templateUrl: './nested-form-one.component.html',
  styleUrls: ['./nested-form-one.component.scss'],
})
export class NestedFormOneComponent implements OnInit {
  public editMode = false;
  @Input()
  public employeeList: IEmployee[];
  public onEdit: string;
  constructor() {}

  ngOnInit(): void {}

  public selectEdited(id: string) {
    this.onEdit = id;
  }

  cancelEdit(event: any) {
    console.log('event: ', event);
    this.editMode = false;
    this.onEdit = null;
  }
}
