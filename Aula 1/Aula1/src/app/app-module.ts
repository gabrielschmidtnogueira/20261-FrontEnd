import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuSuperior } from './menu-superior/menu-superior';
import { Destaque } from './destaque/destaque';
import { Cards } from './cards/cards';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Home } from './home/home';
import { Calculadora } from './calculadora/calculadora';
import { Cliente } from './cliente/cliente';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';

@NgModule({
  declarations: [
    App,
    MenuSuperior,
    Destaque,
    Cards,
    Home,
    Calculadora,
    Cliente,
    PaginaNaoEncontrada
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
