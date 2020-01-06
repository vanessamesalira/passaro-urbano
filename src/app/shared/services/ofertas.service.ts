import { Oferta } from '../models/ofertas.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_API } from 'src/app/app.api';
import { Observable} from 'rxjs';

import { map, retry } from 'rxjs/operators';

@Injectable()
//Essa função permite que nosso serviço receba injeções de outros serviços no caso o HTTP

export class OfertasService {

    constructor(private http: HttpClient){}

    public getOfertas(): Promise<Oferta[]>{
        //efetuar uma requisição http
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
        //Retorna um observable porém agora estamos utilizando uma promise, por isso foi feita a correção.
        .toPromise()        
        //Recuperar o parâmetro resolvido
        .then((resposta: any) => resposta)
        //retorna a promise <Oferta[]>
        return 
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]>{
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta)
    }

    public getOfertasPorId(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
        .toPromise()
        .then((resposta: any) =>{
            return resposta[0]
        })
    }

    public getComoUsarOfertaPorID(id: number): Promise<string>{
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
        .toPromise()
        .then((resposta:any) =>{
            return resposta[0].descricao
        })
    }

    public getOndeFicaOfertaPorID(id: number): Promise<string>{
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
        .toPromise()
        .then((resposta:any) =>{
            return resposta[0].descricao
        })
    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]>{
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
        //_like pesquisa por coisas semelhantes, ou seja, por aproximaçãos
        
        .pipe(map((resposta: any)=> resposta), retry(10))
    }
}