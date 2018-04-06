import {Injectable} from '@angular/core';
import { CurrencyMaskConfig } from 'ng2-currency-mask/src/currency-mask.config';

@Injectable()
export class AppConstants {
  public URL = 'http://localhost:8080/conta';

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
