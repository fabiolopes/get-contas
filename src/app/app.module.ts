import { MatButtonModule } from '@angular/material/button';
import { ContaService } from './services/conta.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { NovaContaComponent } from './nova-conta/nova-conta.component';
import { SimNaoPipe } from './pipes/sim-nao.pipe';
import { NovoItemComponent } from './novo-item/novo-item.component';
import { MatTableModule, MatDialogModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
   MatIconModule,
   MAT_DATE_LOCALE,
   MatCheckboxModule,
   MatSelectModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ContaComponent } from './conta/conta.component';
import { NovaContaDialogComponent } from './nova-conta/nova-conta-dialog/nova-conta-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';
import { AppConstants } from './constants/app.constants';
import {CustomCurrencyMaskConfig } from './constants/app.custom.currency.mask.config';

@NgModule({
  declarations: [
    AppComponent,
    NovaContaComponent,
    SimNaoPipe,
    NovoItemComponent,
    ContaComponent,
    NovaContaDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    CurrencyMaskModule,
    FormsModule
  ],
  providers: [
    ContaService,
    AppConstants,
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent],
  entryComponents: [NovaContaDialogComponent]
})
export class AppModule { }
