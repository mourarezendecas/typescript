# <p align="center">Typescipt</p> 

Podemos considerar o Typescript como um potencializador da linguagem Javascript. Ele permite que grandes sistemas complexos sejam construídos com essa linguagem sem nenhum empecilho e sem que ela deixe a desejar diante de outras linguagens de back-end, como PHP ou Java.

Uma das grandes vantagens é que você pode usar recursos novos, porque o código vai ser copilado pra versão de JS desejada. 

<p align="center"><img src="imgs/ts-js.png" width="400" /> </p>

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

 