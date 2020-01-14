import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { ComoUsarComponent } from './ofertas/como-usar/como-usar.component';
import { OndeFicaComponent } from './ofertas/onde-fica/onde-fica.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurantes', component: RestaurantesComponent},
  {path: 'diversao', component: DiversaoComponent},
  {path: 'oferta/:id', component: OfertasComponent, 
  children: [
    {path: '', component: ComoUsarComponent},
    {path: 'como-usar', component: ComoUsarComponent},
    {path: 'onde-fica', component: OndeFicaComponent}
  ]},
  {path: 'oferta', component: HomeComponent},
  {path: 'ordem-compra', component: OrdemCompraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
