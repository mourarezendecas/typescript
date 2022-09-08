// function setApiVersion(constructor: any) {
//     constructor.api = '0.0.1';
//   }
  
//   @setApiVersion
//   class Wizard {}
  
//   console.log(new Wizard());

function logarClasse(constructor: Function){
    console.log(constructor)
}

function decoratorVazio(_: Function){}

function logarClasseSe(valor:boolean){
    return valor ? logarClasse : decoratorVazio
}

function decorator(obj: {a: string, b?:number}){
    return function(_:Function):void{
        console.log(obj.a+' '+obj.b)
    }
}


type Constructor = {new(...args: any[]): {}}

function logarObjeto(construtor: Constructor){
    console.log('carregando')
    return class extends construtor{
        constructor(...args:any[]){
            console.log('Antes')
            super(...args)
            console.log('Depois')
        }
    }
}

interface Eletrodomestico{
    imprimir?():void
}

//@logarClasse
//@decorator({a:'Teste', b:123})
//@logarClasseSe(false)
//@logarObjeto
@imprimivel
class Eletrodomestico{
    constructor(){
        console.log('novo...')
    }
}

function imprimivel(construtor: Function){
    construtor.prototype.imprimir = function(){
        console.log(this)
    }
}

(<any>new Eletrodomestico()).imprimir()

function perfilAdmin<T extends Constructor>(constructor: T){
    return class extends constructor{
        constructor(...args:any[]){
            super(...args)
            if(!usuarioLogado||!usuarioLogado.admin){
                throw new Error('Sem permissão')
            }
        }
    }
}

// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}


 
new MudancaAdministrativa().critico()

class ContaCorrente{
    private saldo: number 

    constructor(saldo:number)
    {
        this.saldo = saldo
    }

    @congelar
    sacar(valor:number){
        if(valor<=this.saldo){
            this.saldo -= valor
            return true
        }
        else{
            return false
        }
    }

    @congelar
    getSaldo():number{
        return this.saldo
    }


}

const cc = new ContaCorrente(10248.57)
cc.sacar(5000)
console.log(cc.getSaldo())

function congelar(alvo:any, nome:string, descritor: PropertyDescriptor){
    console.log(alvo)
    console.log(nome)
    descritor.writable=false
}