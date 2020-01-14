import { PipeTransform, Pipe } from '@angular/core'

@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform{
    //É uma boa prática implementar o método PipeTransform e com ele o método transform que irá receber o dado que será tratado.
    transform(texto: string, posicao: number): string{
        if(texto.length > posicao){
            return texto.substr(0,posicao) + '...'
        }
        else{
            return texto
        }
    }
}