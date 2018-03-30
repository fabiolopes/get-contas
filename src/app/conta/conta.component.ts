import { FiltroData } from './../model/filtro-data';
import { FiltroPeriodoComponent } from './filtros/filtro-periodo/filtro-periodo.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Conta } from '../model/conta';
import { ContaService } from '../services/conta.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  displayedColumns = ['origem', 'data', 'valorTotal', 'isMensal', 'FormaPagamento'];
  contas;
  dataSource;
  filtroData: FiltroData;
  @ViewChild(MatSort) matSort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private contaService: ContaService, public dialog: MatDialog, private dataService: DataService) {
    this.getContas(null);
  }

  getContas(filtro) {
    if (filtro === null) {
      this.contas = this.contaService.getContas(null);
    }else {
      this.contas = this.contaService.getContas(this.filtroData);
    }

    this.contas.subscribe(contasRecuperadas => {
      if (!contasRecuperadas) {
        return;
      }
      this.dataSource = new MatTableDataSource(contasRecuperadas);
      this.dataSource.sort = this.matSort;
      this.dataSource.paginator = this.paginator;
    });
  }

  openFiltroDataDialog() {
    const dialogRef = this.dialog.open(FiltroPeriodoComponent,
    {
      width: 'auto',
      data: ''
    });

    dialogRef.afterClosed().subscribe(result => {
      if (this.filtroData !== null) {
        this.getContas('data');
        this.filtroData = null;
      }
    });
  }

  ngOnInit() {
    this.dataService.currentFiltroData.subscribe(novoFiltro => {
      this.filtroData = novoFiltro;
  });
  }

}
