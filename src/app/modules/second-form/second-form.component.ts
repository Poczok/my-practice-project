import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { catchError } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { IEmployee } from '../model/employee.interface';
import { of } from 'rxjs';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss'],
  providers: [EmployeeService],
})
@UntilDestroy()
export class SecondFormComponent implements OnInit {
  public employeeList: IEmployee[];
  public error: any;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService
      .getEmployees()
      .pipe(
        catchError((err) => {
          this.error = err;
          return of([]);
        }),
        untilDestroyed(this)
      )
      .subscribe((e: IEmployee[]) => {
        this.employeeList = e;
      });
  }

  public closeApiErrorBox() {
    this.error = null;
  }
}
