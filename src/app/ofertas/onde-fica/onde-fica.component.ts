import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../shared/services/ofertas.service';

@Component({
  selector: 'pu-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.scss'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = ''

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit() {
    this.route.parent.params.subscribe((parametros: Params) => {
      this,this.ofertasService.getOndeFicaOfertaPorID(parametros.id)
      .then((descricao: string) => {
        this.ondeFica = descricao
      })
    })
    //Recuperando parâmetros da rota pai.
  }

}
