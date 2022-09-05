# <p align="center">Typescipt</p> 

# <p align="center">Motivação e diferenças</p>

Podemos considerar o Typescript como um potencializador da linguagem Javascript. Ele permite que grandes sistemas complexos sejam construídos com essa linguagem sem nenhum empecilho e sem que ela deixe a desejar diante de outras linguagens de back-end, como PHP ou Java.

Uma das grandes vantagens é que você pode usar recursos novos, porque o código vai ser copilado pra versão de JS desejada. 

<p align="center"><img src="imgs/ts-js.png" width="400" /> </p>


# <p align="center">Introdução e Instalação</p>

## Instalação 🪛🔨

Para usuários de Linux cujo a distribuição é o Unbutu, vocês devem ter o [node instalado](https://nodejs.org/en/) e através do npm iremos instalar o typescript através do terminal.

```
sudo npm install i -g typescript
```

Para testar a versão instalada, basta digitar o comando: 

```
tsc --version
```

Para inicializar o arquivo de configuração do typescript, insira o comando: 
```
tsc --init
```

O comando acima, gera um arquivo ```tsconfig.json``` na pasta selecionada, esse arquivo especifica os arquivos raiz e as configurações de compilação necessárias para o projeto em typescript. 

<br><br>

## Compilando o projeto TS manualmente 🧑‍💻⌨️

A forma manual de compilar um arquivo TS e gerar outro arquivo JS correspondente. 

Dado um simples comando em TS em um arquivo chamado ```basico.ts``` : 

```typescript
const a : string = 'Teste TS'
console.log(a)
```

Iremos digitar o seguinte comando no console: 
```
tsc basico.ts
```
O comando irá nos retornar um arquivo chamado ```basico.js``` cujo corpo é: 
```javascript
var a = 'Teste TS';
console.log(a);
```

E então iremos digitar o seguinte comando no terminal: 
```
node basico.js
```

Que ira nos retornar a mensagem ```"Teste TS"``` que inserimos no código TS, ou seja, o comando tsc pegou o código typescript e o transformou em js e então com o comando node, executamos o código .js gerado. 

<br><br>

## Executando o TypeScript através do CodeRunner 🪛🧰
Para executar os arquivos TS, podemos utilizar a extensão do vscode chamada [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner). 

Com o code runner instalado, temos que inserir o seguinte comando no terminal para atualizar os pacotes no node. 

```
sudo npm i -g ts-node
```

E então, no arquivo .ts iremos usar a combinação de teclas <kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>n</kbd> para executá-lo e caso a extensão tenha sido executada corretamente, o console irá disponibilizar o resultado esperado. 

<br><br>

## Executando o TypeScript no HTML 🧑‍💻🌎
A primeira coisa a se destacar, é que a parte script do HTML irá apontar para o arquivo .js gerado e não para o .ts codificado.

```html
<script src="introducao/basico.js"></script>
```

Para inicializar nosso projeto com relação aos pacotes do node, utilizaremos o seguinte comando no terminal: 
```
npm init -y
```
Que cria um arquivo chamado ```package.json```, que é um arquivo de configuração utilizado para estipular e configurar dependências do nosso projeto (quais outros pacotes ele vai precisar para ser executado) e scripts automatizados. Através dele conseguimos deixar claro uma "receita" para executar um projeto.

E neste caso iremos criar uma dependência referente ao live-server, que nos permite fazer a compilação do typescript de maneira automática e que o browser detecte e nos disponibiliza. 

Para instalar o live-server utilizaremos o seguinte comando no terminal

```
npm i -s live-server
```

Que então nas dependências, irá disponibilizar o seguinte: 
```json
"dependencies": {
    "live-server": "^1.2.2"
  }
```
Informando a dependência live-server e sua versão. 

E então iremos adicionar na parte dos Scripts, o seguinte: 
```json
    "start":"live-server"
```

Que nos permite executar o seguinte comando no Terminal: 
```
npm start 
```

Que irá disponibilizar o contéudo gerado, abrir um servidor referente à página .html criada e me disponibilizar o conteúdo criado. 

Porém, se houver qualquer tipo de modificação no arquivo .ts, o browser não irá detectar por mais que o terminal e o npm aponte a ocorrência dessa mudança, uma alternativa seria mudar o terminal para a pasta onde o arquivo .ts se encontra e executar o comando  ```tsc arquivo.ts``` e depois disso o browser apresentar a mudança mas podemos fazer isso de maneira mais descomplicada, ao utilizar o seguinte comando no terminal:
```
tsc -w
```
Que irá observar todas as mudanças e vai compilar automaticamente sempre que houver uma mudança em qualquer arquivo .ts presente no projeto, o mais interessante,
 é que essa compilação se dá de maneira automática.
 <br><br>

# <p align="center">Usando Tipos</p>
- **Considerações iniciais:** A cada novo tópico será criado uma nova pasta e o arquivo .ts será referenciado na parte de scripts do arquivo ```index.html``` presente neste repositório. 

## Introdução 
O javascript é uma liguagem de tipos dinâmicos, ou seja, ao criar uma variável podemos ter o tipo que quisermos. Já o TypeScript é uma linguagem tipada, assim que uma variável é atribuida a um tipo, ele não admite nenhum outro tipo, portanto o seguinte comando apresentaria erro: 
```typescript
var exemplo = 'varivael_string'; 
nome = 23; 
```
Pois a variável nome já foi atribuida ao tipo String. 

Os tipos são inferidos, por mais que no código você não tenha explicitado o tipo da variável, o typescript irá considerar o tipo do valor a qual a variável foi primeiramente **associada na declaração da mesma**. 

## <p align="center"> Tipos de variáveis </p>
## String
- Uma parte fundamental da criação de programas em JavaScript para páginas da Web e servidores é trabalhar com dados textuais. Como em outras linguagens, usamos o tipo string para fazer referência a esses tipos de dados textuais. Assim como o JavaScript, o TypeScript também usa aspas duplas ("") ou aspas simples (') para cercar os dados da string.
```typescript
var nome = "Gabriel"
```
## Numbers
-  Como no JavaScript, todos os números no TypeScript são valores de ponto flutuante ou BigIntegers. Esses números de ponto flutuante obtêm o tipo ```number```, enquanto os BigIntegers obtêm o tipo ```bigint```.
```typescript
var idade = 25
console.log(idade)
//Irá mostrar 25 no console 
idade = 13.4
console.log(idade)
//Irá mostrar 13.4 no console
```
## Boolean
- O tipo de dados mais básico é o valor verdadeiro/falso simples, que JavaScript e TypeScript chamam de valor ```boolean```.
```typescript
var possuiHobbie = false; 
console.log(possuiHobbie);
//Console irá mostrar false
```

**Observação:** Por mais que o código apresente problema de compilação seja por um erro qualquer, o compilador irá transformá-lo em .js por padrão. Logo, até o momento iremos evitar cometer algum tipo de erro ao codificar. 

## Atribuindo tipos explícitos 
Se ao declarar a variável, eu não atribuir nenhum valor e fazer isso depois, minha variável se torna do tipo ```any```, admitindo qualquer tipo de valor, como segue o exemplo: 

```typescript
let minha_idade 
minha_idade = 27 
console.log(typeof minha_idade)
minha_idade = 'idade 27'
console.log(typeof minha_idade)
```

Para evitar que isso aconteça, devemos explicitar o tipo da variável em sua declaração e esta declaração se dá da seguinte maneira: 

```
let variavel: tipoVariavel
```

## Array 
- TypeScript, como JavaScript, permite trabalhar com arrays de valores. Os tipos de matriz podem ser escritos de duas maneiras. No primeiro, você usa o tipo dos elementos seguido por `[ ]` para denotar uma matriz desse tipo de elemento. 
```typescript
let hobbies: String[] = ["cozinhar", "Jogar", "Programar"]
```
- A segunda maneira usa o tipo genérico de Array, ```Array<tipoElemento>```: 
```typescript
let list: Array<number> = [1, 2, 3];
```

## Tuplas 
- Um tipo de tupla é um tipo de tipo Array que sabe exatamente quantos elementos ele contém e exatamente quais tipos ele contém em posições específicas.
```typescript
type StringNumberPair = [string, number];
```

## Enums 
- O enum é um dos tipos do TypeScript que nos permite declarar um conjunto de valores/constantes pré-definidos.
```typescript
export enum DiaDaSemana {
    Segunda = 1,
    Terca = 2,
    Quarta = 3,
    Quinta = 4,
    Sexta = 5,
    Sabado = 6,
    Domingo = 7,
}
``` 
Quando não definidos, os valores dentro de Enum, aceitam o sequencial a partir do 0, quando alguns estão definidos e outros não, o valor não definido toma o valor do último acrescido de 1 unidade. 

## Any
- O TypeScript possui verificações de tipo e de tempo de compilação. No entanto, nem sempre temos conhecimento prévio sobre o tipo de algumas variáveis, principalmente quando existem valores inseridos pelo usuário de bibliotecas de terceiros. Nesses casos, precisamos de uma disposição que possa lidar com conteúdo dinâmico. O tipo Qualquer é útil aqui.
```ts
let carro: any = 'bmw'
console.log(carro)
carro = {marca:'bmw', ano: 2022}
console.log(carro)
```
## Trabalhando com os tipos nas funções
- As funções são o bloco de construção básico de qualquer aplicativo, sejam funções locais, importadas de outro módulo ou métodos em uma classe. Eles também são valores e, assim como outros valores, o TypeScript tem muitas maneiras de descrever como as funções podem ser chamadas. Vamos aprender sobre como escrever tipos que descrevem funções.

O typescript nos permite inferir qual o tipo de dado que essa função nos retorna. 

```ts
function retornaMeuNome() : String {
    return nome; 
}
// Está explicito na declaração da função que ela nos retornará uma String
```
**Elucidando a sintaxe:** A sintaxe `(a: string) => void` significa “uma função com um parâmetro chamado a, do tipo string, que não tem um valor de retorno (void)”. Assim como a declaração da função, se o tipo de parâmetro não é especificado, é implícito o tipo `any`.

## Usando as funções como tipo 

Dada uma função digaOi previamente determinada: 
```ts
function digaOi(): void{
    console.log("Olá")
}
let comunicar = digaOi 
comunicar()
```

Podemos atribuir à variável comunicar esta função, portanto a variável passa a ser do tipo digaOi. 

```ts
let comunicar = digaOi 
comunicar()
```

Posso usar a seguinte sintaxe caso eu queira inferir que minha função deve ter certos tipos de parâmetros e me retornar algum tipo de valor: 
```ts
let calculo: (a:number, b:number) => number
//A variável cálculo sera associada a apenas uma função que aceita 2 numeros como parametro e retorna um number 
```
## Objetos e tipos 
Na construção de objetos, podemos inferir quais os tipos de dados esperados que serão associados aos seus atributos. 
```ts
let Usuario: {nome: String, idade: number} = { 
    nome: 'João',
    idade: 24
}
//No objeto usuário, seu atributo nome está associado a uma variável do tipo String e a idade ao uma variável do tipo number.
```
## Colocando em prática

```ts
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
```

## Tipos personalizados com Alias 

Caso quiséssemos criar um novo funcionário com base no código anterior, teríamos que codificar da seguinte maneira: 

```ts
let funcionario2: { 
    supervisores: string[], 
    baterPonto: (horas: number) => String
} ={
    supervisores: ['Bia', 'Carlos'],
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
```

Eu posso criar um tipo chamado funcionário que tem os mesmos parâmetros utilizados nos casos acima:
```ts
type Funcionario ={ 
    supervisores: string[], 
    baterPonto: (horas: number) => String
}
```
E então utilizar esse tipo, similarmente ao que fazemos em uma Classe, **usando a keyword `type`** como um molde para instanciarmos o objeto. 

## Múltiplos tipos com Union Type 

Dado a seguinte situação em que o mesmo dado pode ser apresentado apresentando diversos tipos: 
```ts
var nota = 10
console.log(`Minha nota é ${nota}`)
//Saida no console: Minha nota é 10
var nota = '10'
console.log(`Minha nota é ${nota}`) 
//Saida no console: Minha nota é 10
```
Podemos descrever a variável nota como ``any``, entretanto pode nos ser fornecido um valor booleano, aonde no nosso contexto não faz sentido, tendo em vista o uso de nossa variável, para isso podemos usar a seguinte notação para determinar quais os tipos de variáveis aceitas: 
```ts
var nota: number | String
```
Aonde especificamos quais os tipos serão aceitos pela nossa variável

## Checagem do tipo no Runtime 
Tendo em vista que queremos saber o tipo de um certo valor:
```ts
var valor = 30
```
Por inferência, o compilador considera que o valor acima é do tipo number mas caso desejamos verificar se a variável valor é de fato do tipo number, temos que fazer o seguinte. 
```ts
if(typeof valor=="number")
{
    return "É do tipo number"
}
else{
    return typeof number; 
}
```
No nosso caso, como estamos usando o VSCode, a própria IDE e o TSC nos informa a checagem de tipo, ou seja, no RunTime o VSCode faz a checagem de tipo. 

## 0 tipo never 
Usamos o tipo never, quando queremos dizer explicitamente que a função nunca irá retornar um valor, vejamos um exemplo prático: 

```ts
function falha(msg: string): never{
    throw new Error(msg)
}

const produto = {
    nome : 'Sabão',
    preco: -1, 
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
```
<i>No exemplo acima, quando o método validarProduto() ser invocado, será lançado um erro com a mensagem desejada e não será retornado nada, similarmente ao void mas com a diferença que a função falha é uma função explicita que o tipo do retorno não será indefinido. </i>

## Valores opcionais com o tipo Null
Ao declarar uma variável e implicitar o tipo da mesma, torna-se impossível atribuir o tipo null e isso se torna um problema caso queiramos que o valor da variável seja opcional, segue exemplo: 

```ts
var alturaEscada = 20
alturaEscada = null
//O compilador irá informar um erro, pois a variável não aceitará o valor de null tendo em vista que seu tipo é number.
```
Para isto, temos a seguinte delcaração: 
```ts
var alturaEscada: Number | Null
alturaEscada = Null 
```
<br><br>

# <p align="center">Entendendo o compilador TypeScript</p>

## Compilação "persistente" e o "noEmitOnError" 
Dado o seguinte cenário: 
```js
let canal: String = "Casey Neistat"
let inscritos: number = 18923718
canal = inscritos
console.log(canal)
```
Por mais que o código em .ts apresente erro pelo fato da variável canal ser primeiramente associada ao tipo String, o compilador irá apresentar o código em .js normalmente, pois esse erro não existe no javascript. 

Para interromper essa compilação "persistente", adicionamos a seguinte linha no arquivo `tsconfig.json`: 
```json
"noEmitOnError": true,
```

- Essa função infere que por mais que a variável esteja declarada em outro arquivo, o compilador irá considerá-la como uma variável global e não irá admiti-la 

## Alterando a propriedade target (Versão do JS)

Para alterar a versão do JS que o compilador irá converter o código .ts, temos que alterar a propriedade
```json
"target": "VERSÃO"
```

## Debugando com Source Maps 
Com o source maps, conseguimos ter acesso ao arquivo .ts no browser para facilitar a depuração, pois iremos ver o código fonte que irar gerar o código .js interpretado pelo navegador. 

A motivação para se usar o Source Map, é que ao converter o arquivo .ts para .js, existe um tipo de "uglyfy" do código e pode ficar estranho de interpretar e encontrar os possíveis problemas. Para tal, habilitamos a seguinte linha no tsconfig.json:
```json
"sourceMap": true
```

## Evitando o Any implicito 
Para aumentar o nível de complexidade e sempre exigir que o código em TS admita tipos em sua construção, devemos adicionar a seguinte linha de código. 
```json
"noImplicitAny": true
```

## Os parâmetros "strictNullChecks", "noUnusedParameters" e "noUnusedLocals"
- **"strictNullChecks"**: Quando strictNullChecks é false, null e undefined são efetivamente ignorados pela linguagem. Isso pode levar a erros inesperados em tempo de execução, já quando strictNullChecks for true, null e undefined têm seus próprios tipos distintos e você receberá um erro de tipo se tentar usá-los onde um valor concreto é esperado.

- **"noUnusedParameters" e "noUnusedLocals"**: Dado uma declaração qualquer, caso essa variável não seja usada, o sistema irá reclamar que a variável declarada não é usada. 

## Alterando o diretório de saída dos arquivos .js 
Para uma melhor organização e caso seja desejável, podemos alterar a linha: 
```json 
"outDir": "./"
```
Que irá armazenar os arquivos .js em uma pasta específica

## Alterando o arquivo de saída 
Podemos gerar um arquivo para toda a compilação, que é o seguinte: 
```json
"outFile":"./"
```

<br><br>

# <p align="center">Usando Classes para criar objetos</p>

## Classes e Atributos 
O TypeScript oferece suporte completo para a palavra-chave class introduzida no ES2015, assim como outros recursos da linguagem JavaScript, o TypeScript adiciona anotações de tipo e outras sintaxes para permitir que você expresse relacionamentos entre classes e outros tipos.

Partindo do princípio em que você é familiarizado com a Orientação à objetos e o tratamento de classes, a construção de classes no TS não é muito diferente, conforme o seguinte: 

```ts
    class nomeClasse{
        atributo: tipoAtributo

        constructor(atributro: tipoAtributo){
            this.atributo = atributo
        }
    }
```
Para instanciar uma classe, faz-se o seguinte: 
```ts
const instancia = new nomeClasse(atributo); 
```
<i>Veja o quão semelhante a construção e instanciamento de classes no TS em comparação à outras linguagens de programação.</i>

### ❗Classes por padrão são public. ❗

Uma vez que no construtor, inferimos o valor dos atributos desejados, ao instanciar a classe não precisamos declarar todos os atributos, conforme segue o exemplo: 
```ts
    class nomeClasse{
        atributo: tipoAtributo

        constructor(atributro: tipoAtributo = valor){
            this.atributo = atributo
        }
    }

    //Ao instanciar a classe não temos que informar o valor do atributo 
    const instancia = new nomeClasse//Podendo omitir os ();
```

Maaaaaas.... Existe **Outra maneira de se criar uma classe**:

```ts
    class nomeClasse{
        constructor(public atributo: tipoAtributo){

        }
    }
```
<i>
Ao declarar no construtor que o atributo da classe construida é public, automaticamente esse atributo passa a fazer parte da classe, dispensando a declaração de atributos antes do método construtor.
</i>

<br>

## Métodos de classes 
Uma propriedade de função em uma classe é chamada de método, métodos podem ser usados com a mesma anotação que funções e construtores.

Dada a seguinte necessidade de executar uma apresentação da minha classe, temos que fazer um método que retorna o desejado. 

```ts
    class nomeClasse{
        constructor(public atributo: tipoAtributo){

        }
    }

    apresenta(): String{ 
        return `O valor do atributo é: ${this.atributo}`
    }
```
E vale ressaltar que dentro desses métodos podemos colocar o que quisermos, condicionais, loops de repetições e etc. 

## Modificadores de Acesso 
 Na declaração dos atributos de uma classe, por padrão os mesmos irão receber por padrão a propriedade de visibilidade `public`, ou seja, elas são públicas e podem ser acessadas e alteradas tanto dentro da classe ou fora dela, não tendo um escopo de “segurança”.  

 Para termos um certo controle sobre o acesso das propriedades das classes, temos os chamados modificadores de acesso, que são: 

 `private:` Onde a propriedade pode ser acessada somente pela própria classe. 

 ```ts
 class Pessoa{
	private nome: string = "TreinaWeb";
	idade: number = 12
	estaVivo: boolean = true;
}

let pessoa = new Pessoa();
pessoa.nome = "Paulo"; //Utilizando private não podemos mais acessar desta forma
```

`protected:` Onde a propriedade pode ser acessada pela mesma classe e classes filhas mas não pode ser acessada por outras classes.

```ts
class Pessoa{
	nome: string;
	idade: number;
	protected estaVivo: boolean;

	constructor(nome: string, idade: number, estaVivo: boolean){
    	this.nome = nome;
    	this.idade = idade;
    	this.estaVivo = estaVivo;
	}
}

class PessoaFisica extends Pessoa{
  cnpj: number;

  constructor(nome: string, idade: number, estaVivo: boolean, cnpj: number){
	super(nome, idade, estaVivo); //ao utilizar protected, podemos acessar por classes
	this.cnpj = cnpj;             //filhas e pela própria classe;
  }
}
```

`readonly:`Propriedade pode ser acessada fora da classe, mas não é possível alterar o seu valor. 

```ts
class Pessoa{
	nome: string = "TreinaWeb";
	idade: number = 12
	readonly estaVivo: boolean = true;
}

let pessoa = new Pessoa();
console.log(pessoa.estaVivo); //a propriedade estaVivo será exibida com sucesso.
pessoa.estaVivo = false; //Mas não podemos alterar essa propriedade.
```

## Herança 
A palavra-chave `class`, introduzida no ECMAScript 2015, nos permite definir uma classe em JavaScript. O TypeScript também tem suporte ao paradigma. Um dos elementos da programação orientada à objetos é a herança de classes para reutilizar o código. No JavaScript tradicional, a herança é feita através de protótipos. Já com a palavra-chave class, podemos fazer a herança através da palavra-chave `extends`.

O que foi dito acima é bastante normal para quem já está habituado com a orientação à objetos mas veja como é feito no código typescript.

```ts 
class Carro{ 
    private velocidadeAtual: number = 0

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number=200){
        
    }
    private alterarVelocidade(delta:number) : number
    {
        const novaVelo = this.velocidadeAtual +delta; 
        const velocidadeValida = novaVelo >=0 && novaVelo <=this.velocidadeMaxima
    
        if(velocidadeValida){
            this.velocidadeAtual = novaVelo
        }
        else { 
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual
    }

    public acelerar (): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number{
        return this.alterarVelocidade(-5)
    }
}
```
<i>Dado uma classe qualquer com seus respectivos atributos, desejamos coletar suas propriedades e extender à uma outra classe</i>

```ts
class HyperCarro extends Carro{

}
```
<i>Neste momento, eu não preciso replicar todo o código criado em carro</i>

```ts 
const huayra = new HyperCarro('Pagani', 'Huayra', 350);
```
<i>A classe acima que foi instanciada, herdou todas as propriedades (métodos e atributos)</i>

- Agora, classes que estendem outras classes, podem sobrescrever os métodos assinalados pelas classes pais desde que os métodos de acesso sejam coerentes com o uso, no caso de nossa classe carro, o método `private alterarVelocidade` receberia a assinatura `protected`. 
- Equanto estivermos na classe filha e quisermos executar o construtor da classe pai, deveremos chamar o método `super` e executá-lo, segue o exemplo: 
```ts
    constructor(marca: String, velocidademaxima: number){
        super('Pagani', marca, velocidadeMaxima)
    }
```
<i>Estamos sobrescrevendo o método construtor, podendo passar apenas 2 propriedades e a O.O. irá considerar o nome da marca como a inferida após o super.</i>


## Getters & Setters 
Para alterar atributos que possuém modificadores de acesso do tipo `private`, usamos os métodos `getters` e `setters` assim como em outros paradigmas O.O., porém a notação em typescript é bem diferente do que estamos acostumados. 

```ts
    class Pessoa{ 
        private _idade; 
        //usamos a notação com _ antes do nome do atributo para inferir que o dado informado é do tipo private. 

        get idade(): number{ 
            return this._idade;
        }

        set idade(idade: number){
            this._idade = idade
        }
    }
```
<i> Para nós que estamos acostumados com alguns outros paradigmas de programação, o comum seria `getIdade` e `setIdade` mas veja que a sintaxe aqui em TS é diferente porém o princípio é o mesmo. </i>

E o acesso aos métodos é feito da seguinte maneira: 

```ts
const pessoa1 = new Pessoa (); 
pessoa1.idade = 25; 
//Por mais que pareça que estamos acessando o atributo diretamente, estamos acessando o método set do mesmo.
```