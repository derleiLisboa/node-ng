const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pessoas = require('./pessoas');
var app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get(`/${pessoas.colecao}`, (req, res) => {
    res.send(pessoas.lista());
});

app.get(`/${pessoas.colecao}/:id`, (req, res) => {
    res.send(pessoas.porId(req.params.id));
});


app.post(`/${pessoas.colecao}`, (req, res) => {
    res.send(pessoas.adiciona({ id: null, nome: req.body.nome, idade: req.body.idade }));
});

app.put(`/${pessoas.colecao}/:id`, (req, res) => {
    res.send(pessoas.altera({ id: req.params.id, nome: req.body.nome, idade: req.body.idade }));
});

app.put(`/${pessoas.colecao}`, (req, res) => {
    res.send(pessoas.altera({ id: req.body.id, nome: req.body.nome, idade: req.body.idade }));
});


app.delete(`/${pessoas.colecao}/:id`, (req, res) => {
    res.send(pessoas.remove(req.params.id));
});


app.listen(3000)
