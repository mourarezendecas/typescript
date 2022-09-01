"use strict";
// String 
var nome = 'Gabriel';
console.log(nome);
//Number 
var idade = 27;
console.log(idade);
idade = 17.2;
console.log(idade);
//Boolean 
var possuiHobbie = false;
console.log(possuiHobbie);
// Tipos explícitos 
let minha_idade;
minha_idade = 27;
console.log(typeof minha_idade);
// minha_idade = 'idade 27'
// console.log(typeof minha_idade)
//Array
let hobbies = ["cozinhar", "Jogar", "Programar"];
console.log(hobbies);
//Tuplas
let endereco = ["Av abc", 123];
console.log(endereco);
//Enums 
var Cor;
(function (Cor) {
    Cor[Cor["cinza"] = 0] = "cinza";
    Cor[Cor["verde"] = 100] = "verde";
    Cor[Cor["auzl"] = 101] = "auzl"; // 2 
})(Cor || (Cor = {}));
let minha_cor = Cor.auzl;
console.log(minha_cor);
//Any
let carro = 'bmw';
console.log(carro);
carro = { marca: 'bmw', ano: 2022 };
console.log(carro);
//Funções 
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
//Funções como tipos 
function digaOi() {
    console.log("Olá");
}
let comunicar = digaOi;
comunicar();
//Objetos
let Usuario = {
    nome: 'João',
    idade: 24
};
console.log(Usuario);
//Criando um objeto chamado funcionário
let funcionario = {
    //Na construção do objeto, determino que o atributo supervisores recebe 2 Strings
    supervisores: ['Carlos', 'Simone'],
    //Na construção do objeto, explicito como que o método pre-determinado irá se comportar dado um certo valor de entrada
    baterPonto(horario) {
        if (horario <= 8) {
            return 'normal';
        }
        else {
            return 'fora do horario';
        }
    }
};
//O bloco acima se comporta da seguinte maneira: 
// let variável:{atributo:tipo_atributo, metodo: (nomedavariavel:tipo_variavael)=>tipo_retorno}
// O bloco a frente é onde iremos atribuir valores aos atributos e métodos determinados.
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
//Never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto() {
        if (!this.nome || this.nome.length == 0) {
            falha('precisa ter nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
};
produto.validarProduto();
