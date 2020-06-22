import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {
  public getErrorsStringIdList(err: any) {
    const ids = [];

    if (err.error.errors) {
      for (const error of err.error.errors) {
        ids.push(error.message);
      }
    } else if (err.error) {
      ids.push(err.error.id);
    }

    return ids;
  }
}
