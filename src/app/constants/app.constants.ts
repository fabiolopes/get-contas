import {Injectable} from '@angular/core';
import { CurrencyMaskConfig } from 'ng2-currency-mask/src/currency-mask.config';

@Injectable()
export class AppConstants {
  public URL_DOMAIN = 'http://localhost:8080';
  public URL_CONTA = this.URL_DOMAIN + '/conta';
  public URL_ITEM = this.URL_DOMAIN + '/item';

  public CATEGORIAS = [
    'Refeição',
    'Mercado - Higiene',
    'Mercado',
    'Lazer',
    'Roupas',
    'Cuidados pessoais',
    'Gastos do lar',
    'Transporte',
    'Educação',
    'Outros'
];

}
