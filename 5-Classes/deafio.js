"use strict";
class Moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    buzinar() {
        console.log('Toooooooooot!');
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidade + delta;
        if (novaVelocidade >= 0) {
            this.velocidade = novaVelocidade;
            return this.velocidade;
        }
        else {
            return 0;
        }
    }
    acelerar(delta) {
        this.alterarVelocidade(delta);
    }
    frear(delta) {
        this.alterarVelocidade(-delta);
    }
}
class Objeto2D {
    constructor() {
        this.base = 0;
        this.altura = 0;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
class Estagiario {
    constructor() {
        this._nome = '';
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        if (nome.length >= 3) {
            this._nome = nome;
        }
        else {
            this._nome = '';
        }
    }
}
//# sourceMappingURL=deafio.js.map