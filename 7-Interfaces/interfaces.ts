interface humano{
    nome: string 
    idade?: number
    [prop: string]: any

    saudar(sobrenome: string):void
}


function saudarOi(pessoa: humano){
    console.log('Oi ' + pessoa.nome)
}

function mudarNome (pessoa: humano){
    pessoa.nome = 'João'
}

const pessoa: humano = {
    nome: 'Gabriel', 
    idade: 25, 
    saudar(sobrenome: string){
        console.log ('ola ' + this.nome + ' ' + sobrenome)
    }
}

saudarOi(pessoa)
pessoa.saudar('rezende')
// saudarOi(pessoa)

class Usuario implements humano{
    nome: string = ''
    idade?: number | undefined
    saudar(sobrenome: string): void {
        console.log('Ola meu nome é ' + this.nome + sobrenome)
    }    
}


interface implementaCalculo{
    (a: number, b:number): number
}

let potencia: implementaCalculo

potencia = function(base: number, exp: number): number{
    return base ** exp
}

console.log(potencia(2,3));

interface A {
    a(): void 
}

interface B{
    b(): void
}

interface ABC extends A, B{ 
    c(): void 
}

class RealA implements A{
    a(): void {}
}

class RealAB implements A,B {
    a(): void {}
    b(): void {}
}

class realABC implements ABC{
    c(): void {}
    a(): void {}
    b(): void {}
}



const x = 2 
const y = 3 
const z = 5 