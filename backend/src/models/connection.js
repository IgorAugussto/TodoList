const mysql = require('mysql2/promise');
require('dotenv').config();

/*Essa é uma forma de testar a conexão para saber se está dando tudo certo
require('dotenv').config();
console.log(process.env.MYSQL_HOST);
console.log(process.env.MYSQL_USER);
console.log(process.env.MYSQL_PASSWORD);
console.log(process.env.MYSQL_DATABASE);*/

//Criando a conexão com o banco de dados
const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

module.exports = connection;