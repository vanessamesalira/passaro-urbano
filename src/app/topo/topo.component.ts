import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../shared/services/ofertas.service';
import { Observable, Subject, of } from 'rxjs';
import { Oferta } from '../shared/models/ofertas.model';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';


@Component({
  selector: 'pu-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  public ofertas2: Oferta[]
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa  //retorno Oferta[]
      .pipe(
        debounceTime(1000), //executa a função após 1 segundo (1000 milisegundos)
        distinctUntilChanged(), //fazer apenas pesquisas distintas
        switchMap((termo: string) => {
          console.log('requisicao http para api')

          if (termo.trim() === '') {
            //retornar um observable de array de ofertas vazio
            //Quem fez o subscribe espera receber o array de Ofertas
            return of<Oferta[]>([])
          }
          return this.ofertasService.pesquisaOfertas(termo);
        }),
        catchError ((erro)=> {
          console.log(erro)
          return of([])
        })
        )
        
    this.ofertas.subscribe((ofertas: Oferta[]) => {
      console.log(ofertas)
      this.ofertas2 = ofertas
    })
  }

  public pesquisa(termoDaBusca: string): void {
    console.log('keyup caracter: ', termoDaBusca)
    //console.log((<HTMLInputElement>event.target).value)
    //Exemplo de uma forma de capturar o texto que será digitado no Input
    //console.log(termoDaBusca)

    // this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca)

    // this.ofertas.subscribe(
    //   (ofertas: Oferta[]) => console.log(ofertas),
    //   ((erro: any) => console.log('Erro status: ', erro.status)),
    //   () => console.log('Fluxo de eventos completo!')
    // )

    //Usando subject e Swicth Map
    this.subjectPesquisa.next(termoDaBusca)


  }

}
