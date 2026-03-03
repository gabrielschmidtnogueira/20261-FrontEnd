import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuSuperior } from './menu-superior/menu-superior';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';
import { HomeComponent } from './home-component/home-component';
import { PostListComponen } from './post-list-componen/post-list-componen';
import { PostDetailComponent } from './post-detail-component/post-detail-component';
import { AboutComponent } from './about-component/about-component';

@NgModule({
  declarations: [
    App,
    MenuSuperior,
    PaginaNaoEncontrada,
    HomeComponent,
    PostListComponen,
    PostDetailComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, NgbCarouselModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
