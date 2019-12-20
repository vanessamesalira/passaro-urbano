import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../shared/services/ofertas.service';
import { Oferta } from '../shared/models/ofertas.model';


@Component({
  selector: 'pu-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss'],
  providers: [OfertasService]
})
export class OfertasComponent implements OnInit {

  public oferta:Oferta

  constructor(
    private route: ActivatedRoute, 
    private ofertasService:OfertasService
  ) { }

  ngOnInit() {
    // console.log('Id recuperado da rota:' ,this.route.snapshot.params['id'])
    //Aqui estamos recuperando os parâmetros da rota com o recurso de snapshot
    // console.log('SubId recuperado da rota:' ,this.route.snapshot.params['subId'])
    //Simulação caso quisessemos recuperar outro parâmentro, imaginando que passamos mais de um parâmetro da rota.

    // this.route.params.subscribe((parametro:any)=>{
    //   console.log(parametro.id)
    // })
  //Aqui estamos recuperando os parâmetros da rota com o recurso de subscribe
    this.ofertasService.getOfertasPorId(this.route.snapshot.params['id'])
    .then((oferta: Oferta) =>{
      this.oferta = oferta
    })

  }

}
