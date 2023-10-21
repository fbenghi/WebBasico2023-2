function CalcularParOuImparConsole()
{
    let numeroParaTeste = 5; 

    console.log("o número para teste é " + numeroParaTeste);

    if(calculaEhPar(numeroParaTeste))
        console.log("O Número " + numeroParaTeste + " é par");
    else
        console.log( "O Número " + numeroParaTeste + " é ímpar");
}

Teste();


function CalcularParOuImpar()
{
    let numeroParaTeste = document.getElementById("numeroParaTeste").value;

    console.log("o número para teste é " + numeroParaTeste);

    if(calculaEhPar(numeroParaTeste))
        document.getElementById("resultado").innerText = "O Número " + numeroParaTeste + " é par";
    else
        document.getElementById("resultado").innerText = "O Número " + numeroParaTeste + " é ímpar";
}

function calculaEhPar(valor)
{
    return valor % 2 == 0;
}