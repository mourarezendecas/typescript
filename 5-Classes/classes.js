"use strict";
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    ;
}
;
let aniversario = new Data(22, 6, 1997);
console.log(`Data de aniversário: ${aniversario.dia}/${aniversario.mes}/${aniversario.ano}`);
// Desafio Classe Produto 
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs.: Criar dois produtos: passando dois e três params
class Produto {
    constructor(nome = '', preco = 0, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        if (this.desconto == 0) {
            return `${this.nome} - R$${this.preco} / Não possui desconto`;
        }
        else {
            return `${this.nome} - R$${this.preco} / Desconto de ${this.desconto * 100}% / Valor com desconto: R${this.precoDesconto().toFixed(2)}`;
        }
    }
    precoDesconto() {
        return this.preco = this.preco - (this.desconto * this.preco);
    }
}
// Criar método precoComDesconto
// Quais são os parâmetros e o retorno?
// Alterar método resumo para mostrar o preço com desconto
let prod1 = new Produto("Sabão em pó", 5.99, 0.1);
let prod2 = new Produto("Detergente", 1.99);
console.log(prod1.resumo());
console.log(prod2.resumo());
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelo = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelo >= 0 && novaVelo <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelo;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro("Toyota", "Supra", 380);
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
//# sourceMappingURL=classes.js.map