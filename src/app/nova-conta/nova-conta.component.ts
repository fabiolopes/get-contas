import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { TemplateRef } from '@angular/core/src/linker/template_ref';
import { Conta } from '../model/conta';
import { MatDialog } from '@angular/material';
import { NovaContaDialogComponent } from './nova-conta-dialog/nova-conta-dialog.component';

@Component({
  selector: 'app-nova-conta',
  templateUrl: './nova-conta.component.html',
  styleUrls: ['./nova-conta.component.css']
})
export class NovaContaComponent implements OnInit {

  @Input() conta: Conta;
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(NovaContaDialogComponent,
    {
      width: 'auto',
      data: ''
    });

    dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });
  }

  closeModal(template: TemplateRef<any>) {
  }

  ngOnInit() {
  }

}
