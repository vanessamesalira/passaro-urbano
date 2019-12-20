import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../shared/services/ofertas.service';

@Component({
  selector: 'pu-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.scss'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    //console.log("Id da Rota Pai:", this.route.parent.snapshot.params['id'])
    //Recuperando parâmetros da rota pai.

    this,this.ofertasService.getComoUsarOfertaPorID(this.route.parent.snapshot.params['id'])
    .then((resposta:any) =>{
        console.log(resposta)
    })
  }

}
