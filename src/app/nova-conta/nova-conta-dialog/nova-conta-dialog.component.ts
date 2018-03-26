import { ContaService } from './../../services/conta.service';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Conta } from '../../model/conta';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nova-conta-dialog',
  templateUrl: './nova-conta-dialog.component.html',
  styleUrls: ['./nova-conta-dialog.component.css']
})
export class NovaContaDialogComponent implements OnInit {

  @Input('conta') conta = new Conta();
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
    public contaService: ContaService) {
      this.conta.data = new Date();
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  salvarConta() {
    this.contaService.salvarConta(this.conta);
  }

  ngOnInit() {
  }

}
