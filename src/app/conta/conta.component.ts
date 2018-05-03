import { FiltroData } from './../model/filtro-data';
import { FiltroPeriodoComponent } from './filtros/filtro-periodo/filtro-periodo.component';
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Conta } from '../model/conta';
import { ContaService } from '../services/conta.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatRadioChange } from '@angular/material';
import { DataService } from '../services/data.service';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  displayedColumns = ['origem', 'data', 'valorTotal', 'isMensal', 'FormaPagamento', 'Excluir', 'Visualizar'];
  contas;
  dataSource;
  filtroData: FiltroData;
  @ViewChild(MatSort) matSort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('checkBuscaPeriodo') private checkBoBuscaPeriodo;

  constructor(
    private contaService: ContaService,
    public dialog: MatDialog,
    private dataService: DataService) {
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

  excluirConta(conta: Conta) {
    this.contaService.excluirConta(conta);
    console.log('Excluido com sucesso');
    window.location.reload();
  }

  showDialogItensConta(conta: Conta) {
    const dialogRef = this.dialog.open(ItemComponent,
    {
      width: 'auto',
      data: conta
    });
  }

  openFiltroDataDialog() {
    const dialogRef = this.dialog.open(FiltroPeriodoComponent,
    {
      width: 'auto',
      data: ''
    });

    dialogRef.afterClosed().subscribe(result => {
      this.checkBoBuscaPeriodo.checked = false;
      if (this.filtroData !== null) {
        this.getContas('data');
        this.filtroData = null;
      }
    });
  }

  aplicarFiltroData(event: MatRadioChange) {
    if (event.source.checked) {
      this.openFiltroDataDialog();
    }else {
      this.getContas(null);
    }
  }

  ngOnInit() {
    this.dataService.currentFiltroData.subscribe(novoFiltro => {
      this.filtroData = novoFiltro;
  });
  }

}
