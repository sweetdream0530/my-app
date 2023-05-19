import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { GetValuePipe } from './pipe/get-value.pipe';
import { GetCurrencyCodePipe } from './pipe/get-currency-code.pipe';
import { SortByPipe } from './pipe/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    GetValuePipe,
    GetCurrencyCodePipe,
    SortByPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
