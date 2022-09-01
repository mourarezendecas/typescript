// String 
var nome = 'Gabriel' 
console.log(nome) 

//Number 
var idade = 27
console.log(idade)
idade = 17.2
console.log(idade)

//Boolean 
var possuiHobbie = false 
console.log(possuiHobbie)

// Tipos explícitos 
let minha_idade: number
minha_idade = 27 
console.log(typeof minha_idade)
// minha_idade = 'idade 27'
// console.log(typeof minha_idade)

//Array
let hobbies: String[] = ["cozinhar", "Jogar", "Programar"]
console.log(hobbies)

//Tuplas
let endereco: [string, number] = ["Av abc", 123]
console.log(endereco)

//Enums 
enum Cor {
    cinza, // 0
    verde = 100, // 1
    auzl // 2 
}
let minha_cor: Cor = Cor.auzl; 
console.log(minha_cor);

//Any
let carro: any = 'bmw'
console.log(carro)
carro = {marca:'bmw', ano: 2022}
console.log(carro)

//Funções 
function retornaMeuNome() : String {
    return nome; 
}

console.log(retornaMeuNome());

//Funções como tipos 
function digaOi(): void{
    console.log("Olá")
}

let comunicar = digaOi 

comunicar()