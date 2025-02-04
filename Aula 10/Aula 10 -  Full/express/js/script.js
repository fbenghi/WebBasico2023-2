const main = document.querySelector("main")

const menuHome = document.getElementById("menuHome");
const menuSobre = document.getElementById("menuSobre"); 

const carregarCards = function()
{
    fetch("http://localhost:3000/cards", {
        mode: 'no-cors',
        method: "get"
        })
        .then(res => res.json())
        .then(json => {
            let novosCards = ""
            const cardsHome = document.getElementById("cardsHome");

            for(card in json)
            {
                novosCards +=
                '<div class="subtopic">' +
                '<h3>' + json[card]['titulo'] + '</h3>' +
                    json[card]['texto'] +
                '</div>';
            }

            cardsHome.innerHTML = novosCards;
    });
}



// Função Ajax pra carregar a tela HOME
fetch("html/home.html")         // "Puxa" o arquivo html - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    .then(res => res.text())    // Converte o arquivo para texto 
    .then(texto => {
        main.innerHTML = texto; // Aplica o arquivo convertido em texto ao HTML
        carregarCards();
    });

menuSobre.onclick = function(event)
{
    event.preventDefault();
    fetch("html/sobre.html") // "Puxa" o arquivo - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    .then(res => res.text()) // Converte o arquivo para texto https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
    .then(texto => {
        main.innerHTML = texto; // Aplica o arquivo convertido em texto ao HTML
    });
    
}

menuHome.onclick = function(event)
{
    event.preventDefault();
    fetch("html/home.html")
    .then(res => res.text())
    .then(texto => {
        main.innerHTML = texto;

        carregarCards();
    });
}


