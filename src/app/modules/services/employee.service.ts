import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../model/employee.interface';

@Injectable()
export class EmployeeService {
  private _mockApi = 'http://localhost:3000/';

  constructor(private _http: HttpClient) {}

  public getEmployees() {
    return this._http.get<IEmployee>(`${this._mockApi}employees`);
  }
  public putEmployee(employee: IEmployee, id: string) {
    return this._http.put<IEmployee>(
      `${this._mockApi}employees/${id}`,
      employee
    );
  }
}
