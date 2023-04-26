const express = require('express');
//Importando o Router para o App
const router = require('./router');

const app = express();
//Desse modo a API vai conseguir trabalhar com dados JSON
app.use(express.json());
//Dizer para o App usar sempre o Router para fazer as requisições
app.use(router);

app.get('/', (req, res) => res.status(200).send('Hello, world'));

module.exports = app;