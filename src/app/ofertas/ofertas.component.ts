import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../shared/services/ofertas.service';
import { Oferta } from '../shared/models/ofertas.model';
// import { Observable, interval, Observer } from 'rxjs';


@Component({
  selector: 'pu-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss'],
  providers: [OfertasService]
})
export class OfertasComponent implements OnInit {

  public oferta: Oferta

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
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
      .then((oferta: Oferta) => {
        this.oferta = oferta
      })

    // this.route.params.subscribe(
    //   (parametro: any) => {console.log(parametro)},
    //   (erro: any) => console.log(erro), 
    //   () => console.log('processamento classificado como concluído')
    //   )
    //Exemplo de observable

    // let tempo = interval(2000).subscribe(
    //   (intervalo: number) => {
    //     console.log(intervalo);
    //   });
    // Exemplo de Observable com o interval


    //Observable (observável)
    // let meuObservableTeste = Observable.create((observer:Observer<number>) => {
      // observer.next('Primeiro evento da stream')
      // observer.next(1)
      // observer.next(2)
      // observer.next(3)
      // observer.complete()
      // observer.next(2)
    //})


    //Observable (observador)
    // meuObservableTeste.subscribe(
    //   (resultado: any) => console.log(resultado + 10),
    //   (erro: string) => console.log(erro),
    //   () => console.log("Stream de eventos foi finalizada")
    // )

  }

}
