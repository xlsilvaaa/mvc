import express, {json} from 'express';
import index from './routes/index.js';

const app = express(); //esta variável recebe o express, e será usada em outros arquivos
//app a partir daqui é um FRAMEWORK 

app.use(json()) // o use é um método pronto do express //json é um formato que vamos trabalhar
app.use("/", index);

export default app;




// arquivo JSON? TROCA E ARMAZENAMENTO DE INFORMAÇÕES - YAML VER SITE
// PARSER PRA DETERMINADAS LINGUAGENS USAREM O JSON - ACHAMOS NAS BIBLIOTECAS
//ORGANIZAÇÃO ESTRUTURAL DO TEXTO.

//API ESTRUTURA CONECTADA COM BANCO DE DADOS, QUE USA MÉTODO HTTP PARA ADMINISTRAR OS DADOS.

//API DO SERASA - 

