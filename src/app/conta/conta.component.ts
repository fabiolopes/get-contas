import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Conta } from '../model/conta';
import { ContaService } from '../services/conta.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  displayedColumns = ['origem', 'data', 'valorTotal', 'isMensal', 'FormaPagamento'];
  contas;
  dataSource;
  @ViewChild(MatSort) matSort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(contaService: ContaService) {
    this.contas = contaService.getContas().subscribe(contasRecuperadas => {
      if (!contasRecuperadas) {
        return;
      }
      this.dataSource = new MatTableDataSource(contasRecuperadas);
      this.dataSource.sort = this.matSort;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit() {
  }

}
