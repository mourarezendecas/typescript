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
