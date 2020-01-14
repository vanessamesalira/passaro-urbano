import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/models/ofertas.model';
import { OfertasService } from '../shared/services/ofertas.service';

@Component({
  selector: 'pu-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {
  
  public ofertas: Oferta[]
  // public dataTeste: any = new Date(2017,8,30) Criado para demonstrar o Pipe Date
  //importante lembrar que no objeto Date o mês de janeiro corresponde a 0 e assim por diante.

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('restaurante')
    .then((ofertas: Oferta[]) => {
      this.ofertas = ofertas
    })
  }

}
