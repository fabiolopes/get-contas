import { FiltroData } from './../../../model/filtro-data';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-filtro-periodo',
  templateUrl: './filtro-periodo.component.html',
  styleUrls: ['./filtro-periodo.component.css']
})
export class FiltroPeriodoComponent implements OnInit {

  filtroData = new FiltroData();

  constructor(public dialogRef: MatDialogRef<FiltroPeriodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private dataService: DataService) { }

  aplicarFiltroData() {
    this.dataService.changeFiltroData(this.filtroData);
    this.filtroData = new FiltroData();
  }

  ngOnInit() {
  }

}
