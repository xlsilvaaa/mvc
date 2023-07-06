import apis from '../models/apis.js';

class ApiController { //dentro da class estão as funções.

    static getAllApis = (req, res) => {
        apis.find((err, apis) => {
            res.status(200).json(apis)
        })
    }

    static createApis = (req, res) => {
        let api = new apis(req.body); //AQUI É PRA INSERIR UM REGISTRO NO CORPO, E NÃO APENAS CONSULTA.
        
        api.save((err) => {  //.SAVE É UM METODO DO MONGODB DE SALVAR NO BANCO DE DADOS
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar api`}) 
                //STATUS 500 É PADRÃO DE ERRO
            } else {
                res.status(201).send(api.toJSON()) //O STATUS 201 É QD ALGO É CRIADO COM SUCESSO
                //NOS ENVIE A API NO FORMATO JSON
            }
        })
    }
}

export default ApiController;

//criando propriedades da classe responsável pelas rotas. é a estrada por onde vão passar os dados.

//static é propriedade da classe.
//requisição de api é sempre requisição e resposta. a resposta é o que o cliente está acessando. estamos fazendo algo para conversar com o computador.
//getall é o metodo pra trazer tudo de dentro do banco de dados.
//find é o metodo padrão com sua estrutura.
//classe começa com letra maiuscula - raridade.