import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pu-ordem-compra-sucesso',
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrls: ['./ordem-compra-sucesso.component.scss']
})
export class OrdemCompraSucessoComponent implements OnInit {

  @Input() idPedidoCompra: number

  constructor() { }

  ngOnInit() {
  }

}
