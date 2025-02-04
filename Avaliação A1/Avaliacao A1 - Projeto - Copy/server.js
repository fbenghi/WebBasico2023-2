// Carrega módulos
const http = require('http');
const express = require('express');
const fs = require('fs');

// Configura o uso de express (framework do note)
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Indica que os arquivos HTML estão na pasta express
app.use(express.static("express"));

// Configura o Header HTTP
app.use(function(req, res, next){
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
 });

 
// Cria o servidor
const server = http.createServer(app);

// Indica a porta (processo) em que o servidor vai rodar
const port = 3000;

// Escuta mensagens na porta configurada
server.listen(port);

console.debug('Escutando a porta ' + port);


// Configura a chamada GET Contas: que retorna uma lista de cards para o front
app.get('/contas', function(req, res){
      res.json({
        "contaPF" : {
          "tipo": "Conta Pessoa Física",
          "descricao" : "Conta disponível para qualquer pessoa com CPF",
          "vantagens" : ["Cartão Black", "Planos de milhas"]
        },
        "contaPJ" : {
          "tipo": "Conta Pessoa Jurídica",
          "descricao" : "Conta disponível para qualquer pessoa com CNPJ",
          "vantagens" : ["Cartão Black", "Planos de milhas", "Gerente Exclusivo"]
        }
      });
  });

app.get('/quemsomos', function(req, res){
  res.json({
    "CEO" : {
      "nome" : "Dilermando Salgueiro",
      "realizacoes" : ["Foi e voltou da Lua", "Ensino Fundamental Completo"],
      "fraseMotivacional" : "Só fracassa, quem tenta."
    },
    "Diretor" : {
      "nome" : "Armando Nunes",
      "realizacoes" : ["ex-Fazenda", "ex-BBB"],
      "fraseMotivacional" : "As árvores somos nozes."
    }
  });
});

app.get('/boaprova', function(req, res){
  res.json({
    "professor" : {
      "mensagem" : "Aguardando as suas respostas! Boa Prova Pessoal!!"
    }
  });
});

// Configura a chamada POST novo usuario, que recebe informações sobre o novo card  
app.post('/novousuario', function(req, res){
  console.info(`${req.method} ${JSON.stringify(req.originalUrl)} ${JSON.stringify(req.body)}`) 

  res.status(200);  
});


// Configura a chamada POST novo usuario, que recebe informações sobre o novo card  
app.post('/novareclamacao', function(req, res){
  console.info(`${req.method} ${JSON.stringify(req.originalUrl)} ${JSON.stringify(req.body)}`) 

  res.status(200);  
});


