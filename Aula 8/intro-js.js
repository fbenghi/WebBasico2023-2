/************************************************************************************
    AULA: Introdução ao Javascript

    1. Ambiente de desenvolvimento;
    2. Variáveis var, let, const, string, number e boolean;
    3. Operadores de atribuição, aritméticos, relacionais, lógicos e unários;
    4. Estruturas de decisão if/else, ternárias e switch;
    5. Estruturas de repetição while, do/while, for, for/in e for/of;
    6. Arrays e funções.

    .code runner: ctrl + alt + n  para rodar o código
                  ctrl + alt + m  para interromper a execuação

 ***********************************************************************************/

// Variáveis var, let, const
var a = 10;
let b = 5;
const c = 2;

console.log(a, b, c);
console.log(typeof(a), typeof(b), typeof(c));

//c = 3; 
/*
JS é uma linguagem interpretada e C é uma linguagem compilada
Linguagens Compiladas: 
    Uma linguagem compilada é aquela em que o código-fonte é traduzido integralmente para código de máquina antes da execução1. Isso significa que o programa é convertido em um formato que o computador pode executar diretamente2. As linguagens compiladas tendem a ser mais rápidas e mais eficientes em sua execução do que as linguagens interpretadas2. Exemplos de linguagens compiladas puras são C, C++, Erlang, Haskell, Rust e Go2.

    Linguagens Interpretadas: Uma linguagem interpretada é aquela em que o código-fonte é executado linha por linha por um interpretador em tempo real1. O interpretador lê e executa o código2. Linguagens interpretadas, antigamente, eram significativamente mais lentas do que as linguagens compiladas. Porém, com o desenvolvimento da compilação just-in-time, essa distância vem diminuindo2. Exemplos de linguagens interpretadas comuns são PHP, Ruby, Python e JavaScript2.
*/



if(true)
{
    var d = 1;
    // let d = 1;
}
console.log(d);

/*  var	    Declara uma variável global
    let	    Declara uma variável de bloco
    const	Declara uma constante
*/


// string, number, boolean
// a = true;
// b = "1";
// Fracamente tipada! Permite que eu troque o tipo da variável
/* 
    Fortemente tipado é um termo usado para descrever linguagens de programação que exigem que o tipo de dados de uma variável seja explicitamente definido e imposto pelo compilador. Isso significa que o compilador não permitirá que um programa seja executado se uma variável for usada de uma forma que não corresponda ao seu tipo de dados definido.

    Linguagens fracamente tipada não tem as restrições acima.
*/

console.log(a, b, c);
console.log(typeof(a), typeof(b), typeof(c));




// operador de atribuição e aritméticos (=, +, -, *, /, %):


a = 3;
b = 2;
console.log('A + B: ' + (a + b));
console.log('A - B: ' + (a - b));
console.log('A * B: ' + (a * b));
console.log('A / B: ' + (a / b));
console.log('A % B: ' + (a % b));


//console.log(a, typeof(a));
a = "Texto "
console.log('A + B: ' + (a + b));



// operadores de atribuição aritméticos (=, *=, /=, +=, -=):
a = 5;
var e = 10;
e += a;
console.log('e += a: ' + e);
e -= a;
console.log('e -= a: ' + e);
e *= a;
console.log('e *= a: ' + e);
e /= a;
console.log('e /= a: ' + e);

// Operadores relacionais (==, !=, <, >, <=, >=) e lógicos (!, &&, ||) e unários (++, --):

console.log('A == B: '+ (a == b));
console.log('A != B: '+ (a != b));
console.log('A < B: '+ (a < b));
console.log('A > B: '+ (a > b));
console.log('A <= B: '+ (a <= b));
console.log('A >= B: '+ (a >= b));

// c = false;
console.log('A é igual B e C é verdadeiro: '+ (a == b && c));
console.log('A é igual B ou C é verdadeiro: '+ (a == b || !c));

a = 10;
b = 10;
console.log('A é igual B? ' + (a++ == b));
console.log(a, b);
console.log('A é igual B? ' + (--a == ++b));
console.log(a, b);

a = "10";
b = 10;
console.log('A é igual B? '+ (a == b));
console.log(typeof(a), typeof(b));
console.log('A é igual B? '+ (a === b));


// (VARIÁVEIS) + (OPERADORES) + (ESTRUTURAS)
// Estruturas de decisão if/else, ternárias e switch:

a = 10;
b = 5;
if (a == b){
  console.log('A é igual a B!');
} else {
  console.log('A é diferente B!');
}

// Operador ternario: (condicao) 
let mensagem = a != b ? "A é diferente B!" : "A é igual a B!"; 
console.log(mensagem);

// Estruturas de repetição while, do/while, for, for/in e for/of,  arrays.

const dias = [2,3,4,5,6];
switch (dias[0]) {
  case 2:
      console.log("Segunda-feira!");
    break;
  case 3:
      console.log("Terça-feira!");
    break;
  case 4:
      console.log("Quarta-feira!");
    break;    
  case 5:
      console.log("Quinta-feira!");
    break;  
  case 6:
      console.log("Sexta-feira!");
    break;    
  default:
      console.log("É final de semana!");
    break;
}

const executar = true;
const nomes = ['João', 'Pedro', 'Paulo', 'Tiago', 'Ana', 'Maria'];

let contador = 0;
console.log("\nRepetição utilizando while:")
while(contador < nomes.length && executar){
  console.log(nomes[contador]);
  contador++;
}


contador = 0;
console.log("\nRepetição utilizando do/while:")
do {
  console.log(nomes[contador]);
  contador++;
} while(contador < nomes.length && executar);


console.log("\nRepetição utilizando for convencional:");
for(let i = 0; i < nomes.length; i++){
  console.log(nomes[i]);
}

console.log("\nRepetição utilizando for/in:");
for(i in nomes){
  console.log(nomes[i]);
}

console.log("\nRepetição utilizando for/of:");
for(nome of nomes){
  console.log(nome);
}

// Funções:
// Uma função JavaScript é um bloco de código projetado para realizar uma tarefa específica.
// Uma função JavaScript é executada quando “algo” a invoca (chama).


a = 10;
b = 5;
function somar(a, b){
  return a + b;
}
function subtrair(a, b){
  return a - b;
}
const x = somar(45, 20);
console.log('Valor de X: ' + x);
