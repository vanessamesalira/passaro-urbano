import { ItemCarrinho } from '../models/item-carrinho.model';

export class CarrinhoService{
    public itens: ItemCarrinho[] = []

    public exibirItens(): ItemCarrinho[]{
        return this.itens
    }

}