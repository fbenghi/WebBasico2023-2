# **Desenvolvimento Web Básico**
## A1 - Prova Tipo 2
Prof. Felipe Marx Benghi 
    
## Instruções
* Utilize o projeto base fornecido
* Não é necessário fazer modificações nos scripts do servidor (`server.js`). Todas as mudanças devem ser feitas nos arquivos localizados dentro da pasta `express`
* Para executar servidor, utilize os comandos `npm install` e `npm start`
* A entrega deve consistir em um único arquivo .zip com todos os arquivos da pasta `express`. 

## [33%] Questão 1 - Tema: HTML/CSS + Mobile/Desktop
   
Programe a página `Home` conforme as imagens e instruções fornecidas.

**Modo Desktop**:
1. [4,12%] A página `Home` deve apresentar 2 colunas: 
    * Coluna Principal - `O Banco Web Básico`
    * Coluna Secundária - `Nossa história`  
    
    Observação: o conteúdo do texto é irrelevante
1. [4,12%] A `Imagem 1` deve ser exibida ao lado direito da seção, com texto ao lado esquerdo
1. [4,12%] A `Imagem 2` deve ser exibida centralizada, sem texto a sua volta
1. [4,12%] A seção `Nossa história` deve ser exibida do lado direito

    ![Alt text](image-10.png)

**Mode Mobile**:
1. [4,12%] A página `Home` para Mobile deve apresentar UMA única coluna, com o mesmo conteúdo da página Desktop
1. [4,12%] A `Imagem 1` deve ser exibida centralizada, sem texto a sua volta
1. [4,12%] A `Imagem 2` deve ser exibida centralizada, sem texto a sua volta
1. [4,12%] A seção `Nossa história` deve ser exibida antes da seção `O Banco Web Básico`

    ![Alt text](image-9.png)

Nota: 
* Escolha qualquer imagem para `Imagem 1` e `Imagem 2`, desde que a estrutura requisitada para a página seja seguida. Precisa ser exibido uma imagem.
* Considere que uma tela `Mobile` tem até 480px de largura. Qualquer tela com largura superior deve ser considerada `Desktop`

## [33%] Questão 2 - Tema: Formulários HTML
1. [3%] Adicione um item `Reclamação` ao menu superior. Quando o usuário clicar neste novo item do menu, ele deve ser redirecionado a uma nova página
1. [20%] A nova página deve ter o formulário abaixo para que possam ser submetidas reclamações:

    ![Alt text](image-13.png)

    O Formulário deve permitir ao usuário:   
    * Selecionar o seu pronome de tratamento entre `Sr.` e `Sra.`
    * Digitar seu `Nome`
    * Digitar seu `Telefone`
    * Selecionar uma data para `Quando o problema aconteceu`
    * Inserir um texto explicando o problema
    * Aceitar os `Termos e Condições` de uso
    * Clicar em um link para os `Termos e Condições` de uso. Se clicado, redirecionar o usuário para `http://www.msn.com`
    * Clicar em um botão para `Enviar Reclamação` 

1. [10%] Ao clicar em `Enviar Reclamação`, os valores preenchidos no formulário devem ser enviados ao servidor no endereço `/novareclamacao`, usando um comando `post` 

## [33%] Questão 3 - Tema: Javascript + Manipulação de DOM

1. [3%] Adicione um item `Quem Somos` ao menu superior. Quando o usuário clicar neste novo item do menu, deve ser redirecionado a uma nova página.
1. [10%] A nova página deve carregar os dados a serem exibidos do servidor através do endereço http://localhost:3000/quemsomos. Os dados recebidos estarão no seguinte formato:
    ```JSON
    {
        "CEO": 
        {
            "nome": "Dilermando Salgueiro",
            "realizacoes": [
                "Foi e voltou da Lua",
                "Ensino Fundamental Completo"
            ],
            "fraseMotivacional": "Só fracassa, quem tenta."
        },
        "Diretor": 
        {
            "nome": "Armando Nunes",
            "realizacoes": [
                "ex-Fazenda",
                "ex-BBB"
            ],
            "fraseMotivacional": "As árvores somos nozes."
        }
    }
    ```
1. [20%] Os dados devem ser exibidos conforme a imagem abaixo:

    ![Alt text](image-14.png)

