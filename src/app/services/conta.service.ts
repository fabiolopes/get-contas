import { AppConstants } from '../constants/app.constants';
import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Conta } from '../model/conta';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ContaService {

  constructor(private http: Http, private appConst: AppConstants) {
  }

  getContas(): Observable<Conta[]> {
    return this.http.get(this.appConst.URL)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error() || 'Server error'));
    }

    salvarConta (conta: Conta) {
      return this.http.post(this.appConst.URL, conta).catch((error: any) =>
      Observable.throw(error.json().error() || 'Server error')).subscribe(res => console.log(res.json()));
    }

  }


