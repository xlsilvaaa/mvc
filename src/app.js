import express from 'express';
import index from './routes/index.js'

const app = express(); //esta variável recebe o express, e será usada em outros arquivos
//app a partir daqui é um FRAMEWORK 

app.use(express.json()) // o use é um método pronto do express //json é um formato que vamos trabalhar
app.use("/", index);

export default app

