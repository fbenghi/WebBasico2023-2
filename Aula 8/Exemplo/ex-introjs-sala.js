// const elementoFibonacci = 10;
// let n1 = 0;
// let n2 = 1;
// let proximoN = 0; 
// 
// for(let iterador=0; iterador<elementoFibonacci; iterador++ )
// {
//     console.log(iterador+1 + " - " +  n1);
//     proximoN = n1+n2;
//     n1 = n2;
//     n2 = proximoN;
// }

function calcularFibonacci()
{
    let n1 = 0;
    let n2 = 1;
    let proximoN = 0; 

    let inputFibo = document.getElementById("inputFibo").value;

    for(let iterador=0; iterador<inputFibo; iterador++ )
    {
        //console.log(iterador+1 + " - " +  n1);
        proximoN = n1+n2;
        n1 = n2;
        n2 = proximoN;
    }

    console.log("O " + inputFibo + "o. elemento da Fibonacci é " +  n1);
    document.getElementById("resultado").innerText = "o elemento da Fibonacci é " +  n1;
    return n1;
}

// let forafuncao = calcularFibonacci(10);
// console.log(forafuncao);
// calcularFibonacci(5);
// calcularFibonacci(7);


// Calcular o tamanho de uma string/texto

function calcularTamanhoTexto(texto)
{
    let i = 1;

    while(texto[i] != undefined)
    {
        //console.log(i + " é o caracter " + texto[i]);
        i++;
    }
    console.log("Tamanho calculado " + i);
    return i;
}