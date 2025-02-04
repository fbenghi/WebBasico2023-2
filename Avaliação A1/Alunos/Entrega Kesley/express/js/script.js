const main = document.querySelector("main")
const homeMenu = document.getElementById("menuHome")

// Função Ajax pra carregar a tela HOME
function carregaHome()
{
    fetch("html/home.html")         // "Puxa" o arquivo html - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        .then(res => res.text())    // Converte o arquivo para texto 
        .then(texto => {
            main.innerHTML = texto; // Aplica o arquivo convertido em texto ao HTML

            carregaMensagemBoaProva();
        });
}

// Consulta ao servidor para obter dados para a main
function carregaMensagemBoaProva()
{
    fetch("http://localhost:3000/boaprova")
        .then(res => res.json())
        .then(json => {
            let homeArticle = document.getElementById("homeArticle");
            homeArticle.innerHTML = json["professor"]["mensagem"]
        });
}


// cadastra um evento de clique no menu
homeMenu.onclick = function(event)
{
    carregaHome();
}

// carrega a página home automaticamente
carregaHome();