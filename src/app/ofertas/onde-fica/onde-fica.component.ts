import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    console.log("Id da Rota Pai:",this.route.parent.snapshot.params['id'])
    //Recuperando parâmetros da rota pai.

    this,this.ofertasService.getOndeFicaOfertaPorID(this.route.parent.snapshot.params['id'])
    .then((descricao: string) => {
      this.ondeFica = descricao
    })
  }

}
