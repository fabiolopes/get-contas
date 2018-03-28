import { ContaService } from './../../services/conta.service';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { Conta } from '../../model/conta';
import { FormControl } from '@angular/forms';
import { NovoItemDialogComponent } from '../novo-item-dialog/novo-item-dialog.component';
import { Item } from '../../model/item';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-nova-conta-dialog',
  templateUrl: './nova-conta-dialog.component.html',
  styleUrls: ['./nova-conta-dialog.component.css']
})
export class NovaContaDialogComponent implements OnInit {

  conta = new Conta();
  formasPagamento = [
    {name: 'Dinheiro',              value: 'Dinheiro'},
    {name: 'Crédito - Visa',        value: 'Crédito - Visa'},
    {name: 'Crédito - Mastercard',  value: 'Crédito - Mastercard'},
    {name: 'Crédito - Hipercard',   value: 'Crédito - Hipercard'},
    {name: 'Débito',                value: 'Débito'},
    {name: 'Boleto',                value: 'Boleto'}
  ];


  constructor(
    public dialogRef: MatDialogRef<NovaContaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public contaService: ContaService,
    public dialog: MatDialog,
    private dataService: DataService,
    public snackBar: MatSnackBar) {
      this.conta.data = new Date();
  }

  openItemDialog() {
    const dialogRef = this.dialog.open(NovoItemDialogComponent,
      {
        width: 'auto',
        data: ''
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  salvarConta() {
    if(this.conta.itens.length < 1) {
      this.openSnackBar('Insira um item na conta', '');
    }else {
      const contaSalva = this.contaService.salvarConta(this.conta);
      if (contaSalva != null) {
        this.openSnackBar('Conta salva com sucesso', '');
      }else {
        this.openSnackBar('Falha ao salvar conta', '');
      }
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  ngOnInit() {
    this.dataService.currentItem.subscribe(item => {
      if (item != null) {
        this.conta.itens.push(item);
      }
    });
  }

}
