import { Component, OnInit } from '@angular/core';
import { Conta } from '../model/conta';
import { ContaService } from '../services/conta.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  displayedColumns = ['origem', 'data', 'valorTotal', 'isMensal', 'FormaPagamento'];
  contas;

  constructor(contaService: ContaService) {
    this.contas = contaService.getContas();
  }

  ngOnInit() {
  }

}
