import { Item } from './item';
export class Conta {
  id: number;
  origem: string;
  data: Date;
  valorTotal: number;
  isMensal: boolean;
  formaPagamento: string;
  itens: Item[];
}
