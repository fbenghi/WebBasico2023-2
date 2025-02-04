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

// Carrega o JSON com os cards
let cards = JSON.parse(fs.readFileSync('cards.json', 'utf8'));

// Configura a chamada GET Cards: que retorna uma lista de cards para o front
app.get('/cards/', function(req, res){
    // Envia o JSON de cards
    res.json(cards);
  });


// Configura a chamada POST novo card, que recebe informações sobre o novo card  
app.post('/novocard', function(req, res){
  console.info(`${req.method} ${JSON.stringify(req.originalUrl)} ${JSON.stringify(req.body)}`) 

  // Coloca mais um objeto no JSON
  cards[req.body.chave] = {
    titulo : req.body.titulo,
    texto : req.body.texto
  };

  // Envia só o status 200 - Que indica que a requisição foi aprovada
  res.status(200);  
});


