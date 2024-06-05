import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

//Configuración del local App
import localEsPR from '@angular/common/locales/es-PR';
import localFrCA from '@angular/common/locales/fr-CA';

import { registerLocaleData } from '@angular/common';
registerLocaleData(localEsPR);
registerLocaleData(localFrCA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: "es-PR"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
