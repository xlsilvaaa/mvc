import Router from 'express'; //ISSO É A 1° ROTA  - PÁGINA INICIAL DA APLICAÇÃO // RAUTER
//ROTAS SÃO OS ENVIOS DAS INFORMAÇÕES DO FRONT-END PARA O BACK-END, POR EXEMPLO.
const router = Router();

router.get("/", function (req, res) {   //método https get. é usada para listar coisas - mostrar a página inicial de boas-vindas
    res.status(200).send({   //status tem a ver com sucesso (status 200) ou erro (status 400)
        tittle: "Hello world!",
        version: "1.0.0"
    })
})         

// a função sempre vem com dois parametros = requisição e resposta

export default router;

//local host é o numero da porta, sequencia númerica que serve para simular um domínio(site)
//localhost:8080/dicionario


//UM BANCO DE DADOS É UMA COLEÇÃO ORGANIZADA DE DADOS, CHAMADAS COLLECTIONS

//ATRAVÉS DA ABSTRAÇÃO TRAZEMOS ALGUM ASPECTO DA VIDA REAL COM ALGUMA FINALIDADE ESPECÍFICA.

//ENTIDADE - SÃO OS PERFIS, OS GRANDES GRUPOS Q ARMAZEM DADOS.
//RELACIONAMENTOS É DE RELACIONAR OS DADOS. 

//ESTUDOS DE SQL SÃO IMPORTANTES PARA ENTENDER OS DADOS SE RELACIONANDO.