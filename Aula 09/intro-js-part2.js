/************************************************************************************
    AULA: Introdução ao Javascript - Part 2

    1. Callbacks
    2. JSON
    3. Arrays

    .code runner: ctrl + alt + n  para rodar o código
                  ctrl + alt + m  para interromper a execução

 ***********************************************************************************/

//1. Funções: literais, anônimas, arrows;
// Função literal
function somarLiteral(a, b){
    return a + b;
  }
//console.log(somarLiteral(10, 5));

  
// Função anônima
const fnSomar = function(a, b){
return a + b;
}
// console.log(fnSomar(10, 5));


// Função seta (Arrow function)
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;
const modulo = (a, b) => a % b;
  
// console.log(somar(10, 5));
// console.log(subtrair(10, 5));
// console.log(multiplicar(10, 5));
// console.log(dividir(10, 5));
// console.log(modulo(13, 5));
  

const retorno = function(a, b){
    return a + b;
}(10, 5);
//console.log(retorno);
  

/*
   2. JSON,significa JavaScript Object Notation, é um formato de arquivo que é uma extensão da sintaxe usada para o envio de dados entre aplicativos da Web e um servidor

    Objetos são variáveis, que podem conter múltiplos valores e organizados no formato:
    {
        chave1: valor1,
        chave2: valor2,
        ...
    }
*/

const carro = {tipo:"Fiat", modelo:"500", cor:"branco"};
//console.log(carro);

//Acessando valor
//console.log(carro.tipo);
//console.log(carro["tipo"]);

//Editando valor
carro.modelo = "Uno"
//console.log(carro.modelo);

carro["modelo"] = "Palio"
//console.log(carro.modelo);

// Adicionando novos valores
carro["Placa"] = "AAD9571"
carro.ano = "2000"

// Carregando JSON de um arquivo

const array = require('./produtos.json');

// for (let i = 0; i < array.length; i++) {
//   const produto = array[i];
//   console.log(produto.id + " " + produto.nome);
// }

// for(i in array){
//   const produto = array[i];
//   console.log(produto.id + " " + produto.nome);
// }

// for (produto of array) {
//   console.log(produto.id + " " + produto.nome);
// }


// 3. Arrays: funções forEach, map, filter e reduce.  

//array.forEach(produto => console.log(produto.id + " " + produto.nome));

const nomes = array.map(produto => produto.id + " => " + produto.nome);
//console.log(nomes)
//nomes.forEach(str => console.log(str));

const produtos = array.filter(produto => !produto.ehVegetariano);
//console.log(produtos);

const precos = array.map(produto => produto.preco);
console.log("Preços:" +  precos);


const fnTotalizar = (totalizador, preco) => totalizador + preco;

// array.reduce((accumulator, currentValue) => return resultado)
const total = precos.reduce(fnTotalizar);
console.log(total.toFixed(2));




return;