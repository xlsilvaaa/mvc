import mongoose from 'mongoose'; //ESSA ESTRUTURA É FIXA, E É COMO SE FOSSE CONECTANDO AO MONGOOSE, LIGANDO NA TOMADA. 

mongoose.connect(); //string de conexão
//A função connect guarda a string de conexão dentro dos parenteses. 

let db = mongoose.connection; // agora criamos uma variável que guarda a ação de conectar nosso usuário com o mongoDB.

module.exports = db;


//Mongoose é um biblioteca de Modelagem de Dados de Objeto para mongoDB e NODE.js

/*O MongoDB é um banco de dados de documentos NoSQL que não possui esquemas. 
Isso significa que ele guarda documentos JSON e que a estrutura deles pode variar, já que não há a estrutura 
rígida igual a dos bancos SQL.*/

