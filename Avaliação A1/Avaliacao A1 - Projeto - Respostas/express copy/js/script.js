const main = document.querySelector("main")


// Função Ajax pra carregar a tela HOME
fetch("html/home.html")         // "Puxa" o arquivo html - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    .then(res => res.text())    // Converte o arquivo para texto 
    .then(texto => {
        main.innerHTML = texto; // Aplica o arquivo convertido em texto ao HTML
    });


//
const menuHome = document.getElementById("menuHome");
const menuTiposConta = document.getElementById("menuTiposConta"); 
const menuCadastro = document.getElementById("menuCadastro"); 
const menuQuemSomos = document.getElementById("menuQuemSomos"); 
const menuReclamacao = document.getElementById("menuReclamacao"); 


menuTiposConta.onclick = function(event)
{
    event.preventDefault();
    fetch("html/sobre.html") // "Puxa" o arquivo - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    .then(res => res.text()) // Converte o arquivo para texto https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
    .then(texto => {
        main.innerHTML = texto; // Aplica o arquivo convertido em texto ao HTML
        carregarContas();
    });
    
}

menuQuemSomos.onclick = function(event)
{
    event.preventDefault();
    fetch("html/sobre.html") // "Puxa" o arquivo - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    .then(res => res.text()) // Converte o arquivo para texto https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
    .then(texto => {
        main.innerHTML = texto; // Aplica o arquivo convertido em texto ao HTML
        carregarQuemSomos();
    });
    
}

menuHome.onclick = function(event)
{
    event.preventDefault();
    fetch("html/home.html")
    .then(res => res.text())
    .then(texto => {
        main.innerHTML = texto;
    });
}


menuCadastro.onclick = function(event)
{
    event.preventDefault();
    fetch("html/cadastro.html") // "Puxa" o arquivo - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    .then(res => res.text()) // Converte o arquivo para texto https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
    .then(texto => {
        main.innerHTML = texto; // Aplica o arquivo convertido em texto ao HTML
    });

}

menuReclamacao.onclick = function(event)
{
    event.preventDefault();
    fetch("html/reclamacoes.html") // "Puxa" o arquivo - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    .then(res => res.text()) // Converte o arquivo para texto https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
    .then(texto => {
        main.innerHTML = texto; // Aplica o arquivo convertido em texto ao HTML
    });

}

const carregarContas = function()
{
    fetch("http://localhost:3000/contas")
        .then(res => res.json())
        .then(json => {
            let contas = ""
            const elementoHtmlConta = document.getElementById("paginaSobre");

            for(let conta in json)
            {
                contas +=
                '<h3>' + json[conta]['tipo'] + '</h3>' +
                '<p>' + json[conta]['descricao'] + '</p>' +
                '<p>Vantagens:</p>' +
                '<ul>';

                for(let vantagem in json[conta]["vantagens"])
                {
                    contas += "<li>" + json[conta]["vantagens"][vantagem] + "</li>";
                }

                contas+='</ul>';
            }

            elementoHtmlConta.innerHTML = contas;
    });
}

const carregarQuemSomos = function()
{
    fetch("http://localhost:3000/quemsomos")
        .then(res => res.json())
        .then(json => {
            let cargos = ""
            const elementoHtmlConta = document.getElementById("paginaSobre");

            for(let cargo in json)
            {
                cargos +=
                '<h3>' + json[cargo]['nome'] + '</h3>' +
                'Realizações: <ol>';

                for(let vantagem in json[cargo]["realizacoes"])
                {
                    cargos += "<li>" + json[cargo]["realizacoes"][vantagem] + "</li>";
                }

                cargos+='</ol>'                
                cargos += "Frase Motivacional: ";
                cargos += "<quote>" + json[cargo]["fraseMotivacional"] + " </quote>";
                ;

            }

            elementoHtmlConta.innerHTML = cargos;
    });
}

