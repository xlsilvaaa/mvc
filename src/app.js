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

//MONGODB é um banco de dados orientado a documento. possui registros sem definição de estrutura. ex: colunas, etc
//recebe collection que são as coleções de dados
// em vez de tabelas, linhas e colunas, a base para armazenamento no MongoDB é um documento.

//API - interface de programação de aplicações. pode ser aplicado em qualquer tipo de software.
// api é a interface para que um sistema dialogue com outro sistema. 

//estudar chaves relacional do SQL - dados q se cruzam. ex: site de livraria q pesquisa djamila ribeiro

// document json é uma abstração - lembrar exemplo da garrafa, q são qualificadas diferentes.

//entidade é um perfil que dali é extraído dados - ex: ifood: 3 entidades clearInterval, restaurante e entregador
//e no caixa eletrônico? 2 entidades eu e o banco. dados: 

//ORM CRIA UMA API SIMPLES

//SQL NÃO É FLEXÍVEL PARA ADICIONAR DADOS
//NOSQL É FLEXÍVEL

//mongodb shell - é bom pra treinar linhas de comandos. é um dos sistemas mais completos de dados.

//mongodb atlas q faz gerenciamento de dados mais completo.

//GUI - Interface gráfica da usuária. é como o terminal do vscode pra codar.

//pesquisar conteúdos em aws, google cloud, e azure.

//collection é junção de entidades através de string de conexão.
