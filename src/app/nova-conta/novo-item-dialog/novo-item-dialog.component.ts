import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Item } from '../../model/item';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-novo-item-dialog',
  templateUrl: './novo-item-dialog.component.html',
  styleUrls: ['./novo-item-dialog.component.css']
})
export class NovoItemDialogComponent implements OnInit {

  item = new Item();
  constructor(public dialogRef: MatDialogRef<NovoItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardarItem() {
    this.dataService.changeItem(this.item);
    this.item = new Item();
  }

  ngOnInit() {
  }

}
