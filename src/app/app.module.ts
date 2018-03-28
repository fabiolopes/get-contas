import { MatButtonModule } from '@angular/material/button';
import { ContaService } from './services/conta.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { NovaContaComponent } from './nova-conta/nova-conta.component';
import { SimNaoPipe } from './pipes/sim-nao.pipe';
import { MatTableModule, MatDialogModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
   MatIconModule,
   MAT_DATE_LOCALE,
   MatCheckboxModule,
   MatSelectModule,
   MatSnackBarModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ContaComponent } from './conta/conta.component';
import { NovaContaDialogComponent } from './nova-conta/nova-conta-dialog/nova-conta-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';
import { AppConstants } from './constants/app.constants';
import {CustomCurrencyMaskConfig } from './constants/app.custom.currency.mask.config';
import { NovoItemDialogComponent } from './nova-conta/novo-item-dialog/novo-item-dialog.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    NovaContaComponent,
    SimNaoPipe,
    ContaComponent,
    NovaContaDialogComponent,
    NovoItemDialogComponent,
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
    MatSnackBarModule,
    CurrencyMaskModule,
    FormsModule
  ],
  providers: [
    ContaService,
    DataService,
    AppConstants,
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent],
  entryComponents: [NovaContaDialogComponent, NovoItemDialogComponent]
})
export class AppModule { }
