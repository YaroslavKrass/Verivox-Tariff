import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TariffDetailsPage } from './features/tariff/components/container/tariff-details-page/tariff-details-page.component';
import { ConsumptionFormComponent } from './features/tariff/components/presentational/consumption-form/consumption-form.component';
import { TariffTableComponent } from './features/tariff/components/presentational/tariff-table/tariff-table.component';
@NgModule({
  declarations: [
    AppComponent,
    TariffDetailsPage,
    TariffTableComponent,
    ConsumptionFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
