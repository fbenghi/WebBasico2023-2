const main = document.querySelector("main")


// Função Ajax pra carregar a tela HOME
fetch("html/home.html")         // "Puxa" o arquivo html - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    .then(res => res.text())    // Converte o arquivo para texto 
    .then(texto => {
        main.innerHTML = texto; // Aplica o arquivo convertido em texto ao HTML
    });


//
const menuHome = document.getElementById("menuHome");
const menuCadastro = document.getElementById("menuCadastro"); 
const menuValores = document.getElementById("menuValores"); 


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

menuValores.onclick = function(event)
{
    event.preventDefault();
    fetch("html/valores.html") // "Puxa" o arquivo - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    .then(res => res.text()) // Converte o arquivo para texto https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
    .then(texto => {
        main.innerHTML = texto; // Aplica o arquivo convertido em texto ao HTML
        carregarValores();
    });
    
}



json = 
[
    {
        "titulo" : "Missão",
        "descricao" : "Ser líder na America Latina no setor de educação"
    },
    {
        "titulo" : "Visão",
        "descricao" : "Oferecer produtos e serviços de qualidade na área da educação superior;"
    },
    {
        "titulo" : "Valores",
        "descricao" : "Respeito às diferenças, Inovação, Crescimento sustentável"
    }

];
