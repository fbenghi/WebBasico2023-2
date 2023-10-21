// gera a sequencia de Fibonacci

// Usuário insere um valor
const number = 10;
let n1 = 0, n2 = 1, proximoN;

console.log('Serie de Fibonacci:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    proximoN = n1 + n2;
    n1 = n2;
    n2 = proximoN;
}


// Conta o tamanho da string
let texto = "Texto";
let i = 0;
for(; texto[i] != undefined; i++)
    console.log(texto[i]);

console.log(i);

console.log(texto.length);
