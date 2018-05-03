import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppConstants } from '../constants/app.constants';
import { Observable } from 'rxjs/Rx';
import { Item } from '../model/item';

@Injectable()
export class ItemService {

  constructor(private http: Http, private appConst: AppConstants) { }

  getItensPorConta(contaId: number): Observable<Item[]> {
    return this.http.get(this.appConst.URL_ITEM + '/' + contaId)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error() || 'Server error'));
  }

}
