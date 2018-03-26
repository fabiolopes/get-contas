import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TemplateRef } from '@angular/core/src/linker/template_ref';
import { Conta } from '../model/conta';

@Component({
  selector: 'app-novo-item',
  templateUrl: './novo-item.component.html',
  styleUrls: ['./novo-item.component.css']
})
export class NovoItemComponent implements OnInit {

  conta: Conta;
  constructor() { }

  openModal(template: TemplateRef<any>) {
  }
  closeModal(template: TemplateRef<any>) {
  }

  ngOnInit() {
  }

}
