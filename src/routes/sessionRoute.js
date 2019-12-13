const express = require('express');
const router = express.Router();
const controller = require('../controllers/sessionController');

router.post('/', controller.getToken)
// **
//  * @api {post} / Cadastro de CEP
//  * @apiName getToken
//  * @apiGroup User
//  *
//  * @apiParam {String} CEP Endereçamento Postal único.
//  *
//  * @apiSuccess {String} CEP Cadastro do CEP.
//  * 
//  * @apiSuccessExample Success-Response:
//  *     HTTP/1.1 200 OK
//  *     {
//          "mensagem": "Cep incluído com sucesso"
//        }
//  *
//  * @apiError CEPNotFound CEP não encontrado.
//  *
//  * @apiErrorExample Error-Response:
//  *     HTTP/1.1 404 Not Found
//  *     {
//  *       "error": "CEPNotFound"
//  *     }
//  *

module.exports = router; 