import apis from '../models/api.json';

class ApiController { //dentro da class estão as funções.

    static getAllApis = (req, res) => {
        apis.find((err, apis))
    }
}

export default ApiController;

//criando propriedades da classe responsável pelas rotas. é a estrada por onde vão passar os dados.

//static é propriedade da classe.
//requisição de api é sempre requisição e resposta. a resposta é o que o cliente está acessando. estamos fazendo algo para conversar com o computador.
//getall é o metodo pra trazer tudo de dentro do banco de dados.
//find é o metodo padrão com sua estrutura.
//classe começa com letra maiuscula - raridade.