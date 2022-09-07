// class Data{ 
//     dia: number
//     mes: number
//     ano: number 

//     constructor(dia: number, mes: number, ano: number) {
//         this.dia = dia
//         this.mes = mes
//         this.ano = ano
//     };
// };

// let aniversario = new Data(22, 6, 1997);

// console.log(`Data de aniversário: ${aniversario.dia}/${aniversario.mes}/${aniversario.ano}`);

// // Desafio Classe Produto 
// // Atributos: nome, preco e desconto
// // Criar o construtor
// // Obs 1.: Desconto é opcional (valor padrão 0)
// // Obs.: Criar dois produtos: passando dois e três params
// class Produto { 
//     constructor(public nome: string = '', public preco: number = 0, public desconto: number = 0){
//         this.nome = nome
//         this.preco = preco
//         this.desconto = desconto
//     }

//     resumo(): string{
//        if(this.desconto==0)
//        {
//         return `${this.nome} - R$${this.preco} / Não possui desconto`
//        } 
//        else{
//         return `${this.nome} - R$${this.preco} / Desconto de ${this.desconto*100}% / Valor com desconto: R${this.precoDesconto().toFixed(2)}`
//        }
        
//     }

//     precoDesconto():number{
//         return this.preco = this.preco-(this.desconto*this.preco)
//     }
// }

//     // Criar método precoComDesconto
//     // Quais são os parâmetros e o retorno?
//     // Alterar método resumo para mostrar o preço com desconto

// let prod1 = new Produto("Sabão em pó", 5.99, 0.1);
// let prod2 = new Produto("Detergente", 1.99);

// console.log(prod1.resumo());
// console.log(prod2.resumo())

// class Carro {
//     private velocidadeAtual: number = 0

//     constructor(public marca: string, public modelo: string, private velocidadeMaxima: number=200){
        
//     }

//     private alterarVelocidade(delta:number) : number
//     {
//         const novaVelo = this.velocidadeAtual +delta; 
//         const velocidadeValida = novaVelo >=0 && novaVelo <=this.velocidadeMaxima
    
//         if(velocidadeValida){
//             this.velocidadeAtual = novaVelo
//         }
//         else { 
//             this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
//         }

//         return this.velocidadeAtual
//     }

//     public acelerar (): number {
//         return this.alterarVelocidade(5)
//     }

//     public frear(): number{
//         return this.alterarVelocidade(-5)
//     }
// }

// const carro1 = new Carro("Toyota", "Supra", 380);
 
//  Array(50).fill(0).forEach(()=> carro1.acelerar());
//  console.log(carro1.acelerar());    

//  class Matematica{
//     static PI: number = 3.141516


//     static areaCirc(raio: number): number{ 
//         return this.PI * raio * raio
//     }
// }

// //Classe abstrata
// abstract class Calculo{
//     protected resultado: number = 0

//     abstract executar(...numeros: number[]): void

//     getResultado(): number{
//         return this.resultado
//     }

// }


// class Soma extends Calculo{
//     executar(...numeros: number[]): void {
//         this.resultado = numeros.reduce((t,a)=>t+a)
//     }
    
// }

// class Multiplicacao extends Calculo{
//     executar(...numeros: number[]): void {
//         this.resultado = numeros.reduce((t,a)=>t*a)
//     }
    
// }


// let c1 = new Soma();
// c1.executar(2,3,4,5)
// console.log(c1.getResultado());

// let c2 = new Multiplicacao();
// c2.executar(2,3,4,5);
// console.log(c2.getResultado());

