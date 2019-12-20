import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pu-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss']
})
export class OfertasComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // console.log('Id recuperado da rota:' ,this.route.snapshot.params['id'])
    //Aqui estamos recuperando os parâmetros da rota com o recurso de snapshot
    // console.log('SubId recuperado da rota:' ,this.route.snapshot.params['subId'])
    //Simulação caso quisessemos recuperar outro parâmentro, imaginando que passamos mais de um parâmetro da rota.

    this.route.params.subscribe((parametro:any)=>{
      console.log(parametro.id)
    })
  //Aqui estamos recuperando os parâmetros da rota com o recurso de subscribe
  }

}
