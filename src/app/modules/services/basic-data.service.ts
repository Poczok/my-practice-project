import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IComment } from '../model/comments.interface';
import { IRaceTable } from '../modal-list/model/race-table.interface';
import { Observable } from 'rxjs';
@Injectable()
export class BasicDataService {
  private _mockApi = 'http://localhost:3000/';

  constructor(private _http: HttpClient) {}

  public getComments() {
    return this._http.get<IComment[]>(`${this._mockApi + 'comments'}`);
  }
  public postComment(comment: IComment) {
    return this._http.post<IComment>(`${this._mockApi + 'comments'}`, comment);
  }
  public putComment(comment: IComment, id: number) {
    return this._http.put<IComment>(`${this._mockApi}comments/${id}`, comment);
  }
  public deleteComment(id: number) {
    return this._http.delete<IComment>(`${this._mockApi}comments/${id}`);
  }
  public getRaceResults(): Observable<IRaceTable[]> {
    return this._http.get<IRaceTable[]>(`${this._mockApi}race-results`);
  }
}
