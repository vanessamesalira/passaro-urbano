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

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('restaurante')
    .then((ofertas: Oferta[]) => {
      this.ofertas = ofertas
    })
  }

}
