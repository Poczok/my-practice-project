import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEmployee } from '../../../../model/employee.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../../../services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit {
  @Input()
  public employee: IEmployee;
  public nameControl = new FormControl(null);
  @Output()
  public cancelEdit = new EventEmitter();
  public form = new FormGroup({ name: this.nameControl });
  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.nameControl.patchValue(this.employee.name);
  }

  public save() {
    this.employee.name = this.nameControl.value;
    this._employeeService
      .putEmployee(this.employee, this.employee.id)
      .subscribe((e) => {
        console.log(e);
        this.cancelEdit.emit(true);
      });
  }

  public cancel() {
    this.cancelEdit.emit(true);
  }
}
