import express, {json} from 'express';
import index from './routes/index.js';
import db from './config/dbConnect.js';
import apis from './routes/api.js';

const app = express(); //esta variável recebe o express, e será usada em outros arquivos
//app a partir daqui é um FRAMEWORK 

app.use(json()) // o use é um método pronto do express //json é um formato que vamos trabalhar
app.use("/", index);
app.use("/apis", apis);

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
});

/*metodo ON = a estrutura é começar com o zero, e começar com console.log pra mostrar o erro de exibição. pra mostrar mensagem se a conexão der errado.
o db significa a variável criada no arquivo dbConnect.js*/

export default app;

//ESTE ARQUIVOO É ONDE TUDO ACONTECE. OINDE SE LIGA NA TOMADA!


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
