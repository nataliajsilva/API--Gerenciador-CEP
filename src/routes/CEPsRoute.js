const express = require("express")
const router = express.Router()
const controller = require("../controllers/CEPsController")
const authMiddleware = require('../middleware/auth')


router.post("/", controller.postCep)
/**
 * @api {post} /ceps Cadastro de CEP
 * @apiName postCep
 * @apiGroup Sistema
 *
 * @apiParam {String} CEP Endereçamento Postal único.
 *
 * @apiSuccess {String} CEP Cadastro do CEP.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
         "mensagem": "Cep incluído com sucesso"
       }
 *
 * @apiError CEPNotFound CEP não encontrado.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "CEPNotFound"
 *     }
 */
 
router.get("/", controller.getCeps)
/**
 * @api {get} /ceps Buscar CEPs cadastrados
 * @apiName getCeps
 * @apiGroup Sistema
 *
 * @apiSuccess {String} firstname Firstname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *     { 
 *       "_id": "5dea90fd1939d51a342d350b",
 *       "cep": "04236094",
 *       "ocorrencias": [
 *          {
 *               "data": "15/12/2019",
 *               "hora": "12:00",
 *               "segProduto": "eletronico"
 *            },
 *            {
 *               "data": "20/11/2019",
 *               "hora": "09:00",
 *               "segProduto": "eletronico",
 *               "descricao": "Carro abordado em movimento"
 *          }
 *       ],
 *      "logradouro": "Rua 2 de Fevereiro",
 *       "bairro": "Cidade Nova Heliópolis",
 *      "cidade": "São Paulo",
 *      "estado": "SP",
 *       "qtdOcorrencias": 2,
 *       "periculosidade": "baixa"
 *     },
 *     {
 *      "_id": "5deab57ebd936b1104011e65",
 *       "cep": "06280120",
 *       "ocorrencias": [
 *           {
 *              "data": "02/12/2019",
 *               "hora": "12:00",
 *               "segProduto": "bebidas",
 *               "descrição": " teste"
 *          },
 *           {
 *              "data": "01/12/2019",
 *               "hora": "12:00",
 *               "segProduto": "eletronico",
 *               "descrição": "teste"
 *          },
 *           {
 *              "data": "03/12/2019",
 *               "hora": "12:00",
 *              "segProduto": "eletronico",
 *               "descricao": "teste"
 *          },
 *           {
 *              "data": "20/11/2019",
 *               "hora": "09:00",
 *              "segProduto": "eletronico",
 *               "descricao": "teste 2"
 *          }
 *       ],
 *       "logradouro": "Rua Arara",
 *       "bairro": "Ayrosa",
 *       "cidade": "Osasco",
 *       "estado": "SP",
 *       "qtdOcorrencias": 4,
 *       "periculosidade": "alta"
 *      }    
 * 
 */

router.get("/:cep", controller.getCep)
/**
 * @api {get} /ceps/:cep Buscar por CEP
 * @apiName getCep
 * @apiGroup Sistema
 *
 * @apiParam {String} CEP Endereçamento Postal único.
 *
 * @apiSuccess {String} CEP Buscar CEP.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     { 
 *       "_id": "5dea90fd1939d51a342d350b",
 *       "cep": "04236094",
 *       "ocorrencias": [
 *          {
 *               "data": "15/12/2019",
 *               "hora": "12:00",
 *               "segProduto": "eletronico"
 *            },
 *            {
 *               "data": "20/11/2019",
 *               "hora": "09:00",
 *               "segProduto": "eletronico",
 *               "descricao": "Carro abordado em movimento"
 *          }
 *       ],
 *       "logradouro": "Rua 2 de Fevereiro",
 *       "bairro": "Cidade Nova Heliópolis",
 *       "cidade": "São Paulo",
 *       "estado": "SP",
 *       "qtdOcorrencias": 2,
 *       "periculosidade": "baixa"
 *     }
 *
 * @apiError CEPNotFound CEP não encontrado.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "CEPNotFound"
 *     }
 */

router.get("/local/:cidade", controller.getCidades)
/**
 * @api {get} /ceps/local/:cidade Buscar por cidade
 * @apiName getCidades
 * @apiGroup Sistema
 *
 * @apiParam {String} Cidade Nome da cidade.
 *
 * @apiSuccess {String} CEP CEPs cadastrados com essa cidade.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
  *     { 
 *       "_id": "5dea90fd1939d51a342d350b",
 *       "cep": "04236094",
 *       "ocorrencias": [
 *          {
 *               "data": "15/12/2019",
 *               "hora": "12:00",
 *               "segProduto": "eletronico"
 *            },
 *            {
 *               "data": "20/11/2019",
 *               "hora": "09:00",
 *               "segProduto": "eletronico",
 *               "descricao": "Carro abordado em movimento"
 *          }
 *       ],
 *       "logradouro": "Rua 2 de Fevereiro",
 *       "bairro": "Cidade Nova Heliópolis",
 *       "cidade": "São Paulo",
 *       "estado": "SP",
 *       "qtdOcorrencias": 2,
 *       "periculosidade": "baixa"
 *     }
 * 
 */

router.post("/:cep", controller.postOcorrencias)
/**
 * @api {post} /ceps/:cep Cadastro de ocorrências
 * @apiName postOcorrencias
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError CidadeNotFound Cidade não encontrada.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Not Found
 *     {
 *       "menssagem": "Infelizmente não localizamos a cidade"
 *     }
 */

router.use(authMiddleware)
/**
 * @api {auth} / Autenticação de usuario
 * @apiName authMiddleware
 * @apiGroup User
 *
 * @apiParam {String} email Email do usuário.
 * @apiParam {String} senha Senha do usuário.
 *
 * @apiSuccess {String} Token Token da senha do usuário.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "user": {},
 *        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzYyNTE2NDQsImV4cCI6MTU3NjUxMDg0NH0.X1hjAtk_hyPnU8BKjw5gk90Z4Uy72xd166K6N8F583M"
 *     }
 *
 */

router.put("/:cep/ocorrencias/:ocorrencia", controller.updateOcorrencia)
/**
 * @api {put} /ceps/:cep/ocorrencias/:ocorrencia Alterar ocorrência
 * @apiName updateOcorrencia
 * @apiGroup Sistema
 *
 * @apiParam {String} CEP Endereçamento Postal único.
 * @apiParam {String} ID Ocorrência Cadastro único da ocorrência.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "message": "Ocorrência atualizada com sucesso!"
 *     }
 *
 * @apiError NotFound CEP não encontrado.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "CEP não encontrado"
 *     }
 */

router.delete("/:id", controller.deleteCep)
/**
 * @api {delete} /ceps/:id Excluir CEP
 * @apiName deleteCep
 * @apiGroup Sistema
 *
 * @apiParam {String} id Cadastro único do CEP.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "message": "CEP removido com sucesso"
 *     }
 *
 * @apiError IDNotFound ID não encontrado.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ID não encontrado"
 *     }
 */

module.exports = router