# <p align="center">Typescipt</p> 

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

## - Tipos de variáveis 
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
