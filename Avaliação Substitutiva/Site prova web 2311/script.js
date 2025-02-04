const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/novousuario', (req, res) => {
    const { nome, email, dataNascimento, usuario, senha, tipoConta, termos } = req.body;

    console.log('Novo Usuário:');
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Data de Nascimento:', dataNascimento);
    console.log('Usuário:', usuario);
    console.log('Senha:', senha);
    console.log('Tipo de Conta:', tipoConta);
    console.log('Aceitou Termos:', termos);

    res.redirect('/confirmacao');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});