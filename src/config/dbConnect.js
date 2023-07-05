import mongoose from 'mongoose'; //ESSA ESTRUTURA É FIXA, E É COMO SE FOSSE CONECTANDO AO MONGOOSE, LIGANDO NA TOMADA. 

mongoose.connect("mongodb+srv://admin:aff...123@cluster0.1kf4o1n.mongodb.net/senac2"); //string de conexão")
//A função connect guarda a string de conexão dentro dos parenteses. 

let db = mongoose.connection; // agora criamos uma variável que guarda a ação de conectar nosso usuário com o mongoDB.

export default db;


// fazer um CRUD é uma API conectada no banco de dados.

//Mongoose é um biblioteca de Modelagem de Dados de Objeto para mongoDB e NODE.js

/*O MongoDB é um banco de dados de documentos NoSQL que não possui esquemas. 
Isso significa que ele guarda documentos JSON e que a estrutura deles pode variar, já que não há a estrutura 
rígida igual a dos bancos SQL.*/

//CLASSES E HERANÇAS JS para criar rotas. classe é um tipo de dado. ESTUDAR VIU, GISELEEE?! OO ORIENTAÇÃO A OBJETOS


//POSTMAN É FERRAMENTA DE TESTES PARA VERIFICAR AS ROTAS DE UMA API. SEJA CRUD ... SIMULA O NAVEGADOR.

//api para consulta de cep: viacep.com.br/ws/01001000/json/

