class Moto {
    velocidade: number = 0
    constructor (public nome: string){

    }

    buzinar(){
        console.log('Toooooooooot!')   
    }

    private alterarVelocidade(delta:number): number{
        const novaVelocidade = this.velocidade + delta 
        if(novaVelocidade>=0)
        {
            this.velocidade = novaVelocidade
            return this.velocidade
        }
        else{
            return 0
        }
    }

    acelerar (delta: number): void{
        this.alterarVelocidade(delta)
    }

    frear (delta: number): void{ 
        this.alterarVelocidade(-delta)
    }
}

class Objeto2D {
    base: number = 0
    altura: number = 0
}

class Retangulo extends Objeto2D {
    area(){
        return this.base * this.altura
    }
}


class Estagiario {
    private _nome: string = ''

    get nome(): string{
        return this._nome
    }

    set nome(nome:string){
        if(nome.length>=3){
            this._nome = nome
        }
        else{
            this._nome = ''
        }
    }
}