import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';
import { HomeComponent } from './home-component/home-component';
import { PostListComponen } from './post-list-componen/post-list-componen';
import { PostDetailComponent } from './post-detail-component/post-detail-component';
import { AboutComponent } from './about-component/about-component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'post', component: PostListComponen },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PaginaNaoEncontrada },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
