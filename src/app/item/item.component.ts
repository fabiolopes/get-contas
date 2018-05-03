import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  displayedColumns = ['Nome', 'Desc', 'Categoria', 'ValorUnitario', 'Qtd', 'Necessario'];
  dataSource;
  itens;
  @ViewChild(MatSort) matSort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialogRef: MatDialogRef<ItemComponent>,  @Inject(MAT_DIALOG_DATA) public data: any, private itemService: ItemService) {
    this.getItensPorConta(data.id);
  }

  getItensPorConta(contaId: number) {
    this.itens = this.itemService.getItensPorConta(contaId);
    this.itens.subscribe(itensRecuperados => {
      if (!itensRecuperados) {
        return;
      }
      this.dataSource = new MatTableDataSource(itensRecuperados);
      this.dataSource.sort = this.matSort;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit() {
  }

}
