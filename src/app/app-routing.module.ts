import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: NoticiasComponent },
  {path:'detalhes/:id', component: DetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
