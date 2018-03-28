import { Item } from './../model/item';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private itemSource = new BehaviorSubject<Item>(null);
  currentItem = this.itemSource.asObservable();
  constructor() { }

  changeItem(item: Item) {
    this.itemSource.next(item);
  }

}
