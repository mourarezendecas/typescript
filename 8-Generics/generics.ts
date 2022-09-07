// function echo(objeto: any){
//     return objeto
// }

// console.log(echo('Gabriel').lenght)
// console.log(echo(24))
// console.log(echo({nome:'GAbriel', idade: 27}))

//Usando generics 

function echo<T>(objeto: T): T{
    return objeto
}

console.log(echo('Gabriel').length)
console.log(echo<number>(18)) // O sistema irá reclamar pois identifica que a propriedade lenght não existe para o tipo number

const avaliacoes: Array<number> = [10, 9.3, 7, 9]

avaliacoes.push(8.4)
//avaliacoes.push('5.5')

console.log(avaliacoes)

function imprimir<T>(args: T[]){
    args.forEach(elemento => console.log(elemento))
}

imprimir([1,2,3])
imprimir<number>([1,2,3])
imprimir<string>(['Gabriel','Felipe','Joao'])

type Aluno = {nome: string, idade: number}
imprimir<Aluno>([
    {nome: 'Fulano', idade: 22},
    {nome: 'Cicrano', idade: 25}
])

//Class com Generics
abstract class OperacaoBinaria<T, R>{
    constructor(public operando1: T, public operando2: T){

        }
    abstract executar (): R
}

class SomaBinaria extends OperacaoBinaria<number, number>{
    executar(): number {
        return this.operando1 + this.operando2
    }
    
}

console.log(new SomaBinaria(2,3).executar())

class Data{ 
    dia: number
    mes: number
    ano: number 

    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    };
};

class DiferencaEntreDatas extends OperacaoBinaria<Data, string>{
    getTime(data: Data): number{
        let {dia, mes, ano} = data
        return new Date(`${mes}/${dia}${ano}`).getTime()
    }
    
    executar():string{
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        const diferenca = Math.abs(t1-t2)
        const dia = 1000 * 60 * 24
        return `${Math.ceil(diferenca/dia)} dia(s)`
    }
}

const d1 = new Data(1, 2, 2020)
const d2 = new Data(5, 2, 2020)

console.log(new DiferencaEntreDatas(d1, d2).executar())

class Fila<T>{
    private fila: Array<T>

    constructor(...args: T[])
    {
        this.fila = args
    }

    entrar(elemento: T)
    {
        this.fila.push(elemento)
    }

    proximo(): T { 
        const primeiro = this.fila[0]
        this.fila.splice(0,1)
        return primeiro
    }

    imprimir(){
        console.log(this.fila)
    }
}

const fila = new Fila<string>('Gui', 'Pedro', 'Ana')

fila.imprimir()
fila.entrar('Rafael')
console.log(fila.proximo())
fila.imprimir()


// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()
type Par<C,V>= {chave: C, valor: V}

class Mapa<C, V>{
    itens: Array<Par<C, V>> = new Array<Par<C,V>>()

    obter(chave: C): Par<C, V> | null{
        const resultado = this.itens.filter(i=>i.chave ===chave)
        return resultado ? resultado[0] : null
    }

    colocar(par: Par<C,V>){
        const encontrado = this.obter(par.chave)
        if(encontrado){
            encontrado.valor = par.valor
        }
        else{
            this.itens.push(par)
        }
    }
}

 
const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
