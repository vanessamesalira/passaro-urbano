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
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa  //retorno Oferta[]
      .pipe(
        debounceTime(1000), //executa a função após 1 segundo (1000 milisegundos)
        distinctUntilChanged(), //fazer apenas pesquisas distintas
        switchMap((termo: string) => {

          if (termo.trim() === '') {
            //retornar um observable de array de ofertas vazio
            //Quem fez o subscribe espera receber o array de Ofertas
            return of<Oferta[]>([])
          }
          return this.ofertasService.pesquisaOfertas(termo);
        }),
        catchError ((erro)=> {
          return of([])
        })
        )
  }

  public pesquisa(termoDaBusca: string): void {
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

  public limpaPesquisa(): void{
    this.subjectPesquisa.next("")
  }

}
