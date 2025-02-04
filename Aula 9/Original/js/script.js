const main = document.getElementsByTagName("main")

fetch("html/home.html") // Buscar o arquivo home.html
.then(res => res.text()) // converter arquivo para texto
.then(texto => {
    // insere o arquivo home.html, convertido em texto
    // dentro da taf main
    main[0].innerHTML = texto; 
});


const menuSobre = document.getElementById("menuSobre");
menuSobre.onclick = function(evento)
{
    evento.preventDefault(); // Interrompendo o comportamento padrão do clique
    fetch("html/sobre.html")
        .then(res => res.text())
        .then(texto => {
            main[0].innerHTML = texto; 
        }); 
}


const menuHome = document.getElementById("menuHome");
menuHome.onclick = function(evento)
{
    evento.preventDefault(); // Interrompendo o comportamento padrão do clique
    fetch("html/home.html")
        .then(res => res.text())
        .then(texto => {
            main[0].innerHTML = texto; 
        }); 
}


fetch("cards.json")
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
