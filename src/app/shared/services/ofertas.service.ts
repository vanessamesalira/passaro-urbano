import { Oferta } from '../models/ofertas.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
//Essa função permite que nosso serviço receba injeções de outros serviços no caso o HTTP

export class OfertasService {

    constructor(private http: HttpClient){}

    public getOfertas(): Promise<Oferta[]>{
        //efetuar uma requisição http
        return this.http.get('http://localhost:3000/ofertas')
        //Retorna um observable porém agora estamos utilizando uma promise, por isso foi feita a correção.
        .toPromise()        
        //Recuperar o parâmetro resolvido
        .then((resposta: any) => resposta)
        //retorna a promise <Oferta[]>
        return 
    }
}