document.addEventListener("DOMContentLoaded", function () {
    // Simulação de uma requisição ao servidor
    const dadosDoServidor = {
        "CEO": {
            "nome": "Dilermando Salgueiro",
            "realizacoes": [
                "Foi e voltou da Lua",
                "Ensino Fundamental Completo"
            ],
            "fraseMotivacional": "Só fracassa, quem tenta."
        },
        "Diretor": {
            "nome": "Armando Nunes",
            "realizacoes": [
                "ex-Fazenda",
                "ex-BBB"
            ],
            "fraseMotivacional": "As árvores somos nozes."
        }
    };

    // Exibir os dados na página
    exibirDados(dadosDoServidor);
});

function exibirDados(dados) {
    const quemSomosContent = document.getElementById("/quemsomos");

    for (const cargo in dados) {
        if (dados.hasOwnProperty(cargo)) {
            const pessoa = dados[cargo];

            const divPessoa = document.createElement("div");
            divPessoa.innerHTML = `<h1>${pessoa.nome}</h1>
                                  <p>Realizações:</p>
                                  <ul>${pessoa.realizacoes.map(realizacao => `<li>${realizacao}</li>`).join('')}</ul>
                                  <p>Frase Motivacional: ${pessoa.fraseMotivacional}</p>`;

            quemSomosContent.appendChild(divPessoa);
        }
    }
}
