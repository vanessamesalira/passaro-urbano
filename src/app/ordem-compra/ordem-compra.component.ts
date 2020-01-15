import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../shared/services/ordem-compra.service'
import { Pedido } from '../shared/models/pedido.model'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarrinhoService } from '../shared/services/carrinho.service';
import { ItemCarrinho } from '../shared/models/item-carrinho.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
  providers: [ OrdemCompraService ]
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
    public itensCarrinho: ItemCarrinho[] = []

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens()
    console.log(this.itensCarrinho)
  }

  public confirmarCompra(): void {
    if(this.formulario.status === 'INVALID'){
      this.formulario.get('endereco').markAsTouched(),
      this.formulario.get('numero').markAsTouched(),
      this.formulario.get('complemento').markAsTouched(),
      this.formulario.get('formaPagamento').markAsTouched()
    }
    else{

      if(this.carrinhoService.exibirItens().length === 0){
        alert('Você não selecionou nenhum item')
      }
      else{
        let pedido: Pedido = new Pedido(
          this.formulario.value.endereco,
          this.formulario.value.numero,
          this.formulario.value.complemento,
          this.formulario.value.formaPagamento,
          this.carrinhoService.exibirItens()
        )

        console.log(pedido)
    
        this.ordemCompraService.efetivarCompra(pedido)
        .subscribe((idPedido: number)=>{
          this.idPedidoCompra = idPedido
        })
      }
    }

  }

  public adicionarQuantidade(item: ItemCarrinho): void {
    this.carrinhoService.adicionarQuantidade(item)
  }
  //Exemplo de implementação, poderíamos também chamarmos o método diretamente do template (carrinhoService.adicionarQuantidade())


  public diminuirQuantidade(item: ItemCarrinho): void {
    this.carrinhoService.diminuirQuantidade(item)
  }

}
