import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../shared/services/ofertas.service';

@Component({
  selector: 'pu-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.scss'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = ''

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe((parametros: Params) => {
      this,this.ofertasService.getComoUsarOfertaPorID(parametros.id)
      .then((descricao: string) => {
        console.log(descricao)
        this.comoUsar = descricao
      })
    })
    //Recuperando parâmetros da rota pai.
  }

}
