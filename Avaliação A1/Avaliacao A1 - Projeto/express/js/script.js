const main = document.querySelector("main")


// Função Ajax pra carregar a tela HOME
fetch("html/home.html")         // "Puxa" o arquivo html - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    .then(res => res.text())    // Converte o arquivo para texto 
    .then(texto => {
        main.innerHTML = texto; // Aplica o arquivo convertido em texto ao HTML
    });
