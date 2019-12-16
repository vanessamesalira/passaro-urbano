import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/models/ofertas.model';
import { OfertasService } from '../shared/services/ofertas.service';

@Component({
  selector: 'pu-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.scss'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('diversao')
    .then( (ofertas: Oferta[]) =>{
      this.ofertas = ofertas
    })
  }

}
