import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_API } from '../../app.api'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
@Injectable()
export class OrdemCompraService {
 
  constructor(private http: HttpClient) { }
  
 
  public efetivarCompra(pedido: Pedido): Observable<number>{
 
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
    })
    let options = {
      headers,
  }
 
    return this.http.post(`${URL_API}/pedidos`,JSON.stringify(pedido),options).pipe(
      map((resposta: any) => resposta.id)
    )
  }
}