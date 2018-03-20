import { ContaService } from './conta.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { NovaContaComponent } from './nova-conta/nova-conta.component';
import { Configuration } from './ap.constants';
import { SimNaoPipe } from './sim-nao.pipe';
import { NovoItemComponent } from './novo-item/novo-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NovaContaComponent,
    SimNaoPipe,
    NovoItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ContaService, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
