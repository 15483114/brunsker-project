import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImoveisComponent } from './imoveis/imoveis.component';
import { HttpClientModule } from '@angular/common/http';
import { ImoveisService } from './imoveis.service';
import { FormsModule } from '@angular/forms';
import { ImoveisCardComponent } from './imoveis-card/imoveis-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ImoveisComponent,
    ImoveisCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ImoveisService,
    HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
