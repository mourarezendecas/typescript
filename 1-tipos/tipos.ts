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

//Objetos
let Usuario: {nome: String, idade: number} = { 
    nome: 'João',
    idade: 24
}

console.log(Usuario);


//Criando um objeto chamado funcionário
let funcionario: { 
    //Informo que o objeto funcionario tem um atributo chamado supervisores do tipo array de String
    supervisores: string[], 
    //Informo que o objeto funcionario tem um método chamado baterPonto, que recebe um parâmetro do tipo number chamado horas e nos retorna uma String
    baterPonto: (horas: number) => String
} ={
    //Na construção do objeto, determino que o atributo supervisores recebe 2 Strings
    supervisores: ['Carlos', 'Simone'],
    //Na construção do objeto, explicito como que o método pre-determinado irá se comportar dado um certo valor de entrada
    baterPonto(horario: number): string{
        if(horario<=8)
        {
            return 'normal'
        }
        else{
            return 'fora do horario'
        }
    }
}

//O bloco acima se comporta da seguinte maneira: 
// let variável:{atributo:tipo_atributo, metodo: (nomedavariavel:tipo_variavael)=>tipo_retorno}
// O bloco a frente é onde iremos atribuir valores aos atributos e métodos determinados.

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));

//Never
function falha(msg: string): never{
    throw new Error(msg)
}

const produto = {
    nome : 'Sabão',
    preco: 4, 
    validarProduto(){
        if(!this.nome || this.nome.length==0)
        {
            falha('precisa ter nome')
        }
        if(this.preco<=0)
        {
            falha('Preço inválido')
        }
    }
}

produto.validarProduto()