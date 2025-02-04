document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:3000/quemsomos")
        .then(response => response.json())
        .then(data => {
            exibirDados(data);
        })
        .catch(error => console.error("Erro ao obter dados:", error));
});

function exibirDados(dados) {
    const conteudoQuemSomos = document.getElementById("conteudo-quem-somos");

    const ceoRealizacoes = dados.CEO.realizacoes.map((realizacao, index) => `<li>${realizacao}</li>`).join("");
    const diretorRealizacoes = dados.Diretor.realizacoes.map((realizacao, index) => `<li>${realizacao}</li>`).join("");

  
    conteudoQuemSomos.innerHTML = `
        <h2>CEO: ${dados.CEO.nome}</h2>
        <p>Realizações:</p>
        <ul>${ceoRealizacoes}</ul>
        <p>Frase Motivacional: ${dados.CEO.fraseMotivacional}</p>

        <h2>Diretor: ${dados.Diretor.nome}</h2>
        <p>Realizações:</p>
        <ul>${diretorRealizacoes}</ul>
        <p>Frase Motivacional: ${dados.Diretor.fraseMotivacional}</p>
    `;
}