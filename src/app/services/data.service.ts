import { Item } from './../model/item';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FiltroData } from '../model/filtro-data';

@Injectable()
export class DataService {

  private itemSource = new BehaviorSubject<Item>(null);
  currentItem = this.itemSource.asObservable();

  private filtroDataSource = new BehaviorSubject<FiltroData>(null);
  currentFiltroData = this.filtroDataSource.asObservable();

  constructor() { }

  changeItem(item: Item) {
    this.itemSource.next(item);
  }

  changeFiltroData(filtroData: FiltroData) {
    this.filtroDataSource.next(filtroData);
  }

}
