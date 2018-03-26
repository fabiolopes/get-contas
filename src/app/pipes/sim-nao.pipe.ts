import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simNao'
})
export class SimNaoPipe implements PipeTransform {

  isSim;

  transform(value: boolean): any {
    this.isSim = 'Não';
    if (value === false) {
      this.isSim = 'Sim';
    }
    return this.isSim;
  }

}
