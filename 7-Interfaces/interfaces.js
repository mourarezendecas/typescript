"use strict";
function saudarOi(pessoa) {
    console.log('Oi ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'João';
}
const pessoa = {
    nome: 'Gabriel',
    idade: 25,
    saudar(sobrenome) {
        console.log('ola ' + this.nome + ' ' + sobrenome);
    }
};
saudarOi(pessoa);
pessoa.saudar('rezende');
// saudarOi(pessoa)
class Usuario {
    constructor() {
        this.nome = '';
    }
    saudar(sobrenome) {
        console.log('Ola meu nome é ' + this.nome + sobrenome);
    }
}
let potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
console.log(potencia(2, 3));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class realABC {
    c() { }
    a() { }
    b() { }
}
const x = 2;
const y = 3;
const z = 5;
//# sourceMappingURL=interfaces.js.map