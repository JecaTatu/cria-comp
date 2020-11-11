import { RenderImageComponent } from './render-image/render-image.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Carregando componente ListComponent caso path seja vazio (padrão)
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'transformation',
    component: RenderImageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
