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