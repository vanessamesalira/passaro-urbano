import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../shared/services/ordem-compra.service'
import { Pedido } from '../shared/models/pedido.model'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarrinhoService } from '../shared/services/carrinho.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
  providers: [ OrdemCompraService, CarrinhoService ]
})
export class OrdemCompraComponent implements OnInit {

  public formulario = new FormGroup({
    'endereco': new FormControl(null,[Validators.required, Validators.min(3), Validators.max(30)]),
    'numero': new FormControl(null,[Validators.required, Validators.min(1), Validators.max(20)]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [Validators.required])
  })

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
    ) { }

    public idPedidoCompra: number

  ngOnInit() {
    console.log("Array de itens no carrinho: ", this.carrinhoService.exibirItens())
  }

  public confirmarCompra(): void {
    console.log(this.formulario)

    let pedido: Pedido = new Pedido(
      this.formulario.value.endereco,
      this.formulario.value.numero,
      this.formulario.value.complemento,
      this.formulario.value.formaPagamento
    )

    this.ordemCompraService.efetivarCompra(pedido)
    .subscribe((idPedido: number)=>{
      this.idPedidoCompra = idPedido
    })
  }
}
