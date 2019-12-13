const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuariosController')

router.post('/', controller.post)
// *
 //* @api {post} /usuarios Cadastro de usuário
 //* @apiName post
 //* @apiGroup User
 //*
 //* @apiParam {String} Nome Nome do usuário.
 //* @apiParam {String} Email Email do usuário.
 //* @apiParam {String} Senha Senha do usuário.
 //*
 //* @apiSuccess {String} Usuário Cadastro do usuário.
 //* 
 //* @apiSuccessExample Success-Response:
 //*     HTTP/1.1 200 OK
 //*     {
 //*      "_id": "5df3afd6951a08341830489e",
//  *      "nome": "Natalia de Jesus Silva",
//  *      "email": "nataliajsilva2@outlook.com",
//  *      "senha": "$2a$10$Nhs2GquEHPp/kcP/NDu.d.ZgBEVcHVeGVtR0MIGTWL1eBZa4sGYwe",
//  *      "createdAt": "2019-12-13T15:35:50.283Z"
//  *     }
//  *

router.post('/auth', controller.postAuth)

// **
//  * @api {post} /usuarios/auth Gerar Token do usuário
//  * @apiName postAuth
//  * @apiGroup User
//  *
//  * @apiParam {String} Email Email do usuário.
//  * @apiParam {String} Senha Senha do usuário.
//  *
//  * @apiSuccess {String} Token Token do usuário.
//  * 
//  * @apiSuccessExample Success-Response:
//  *     HTTP/1.1 200 OK
//  *     {
//  *       "user": {},
//  *       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzYyNTE2NDQsImV4cCI6MTU3NjUxMDg0NH0.X1hjAtk_hyPnU8BKjw5gk90Z4Uy72xd166K6N8F583M"
//  *     }
//  *
//  * @apiError UserNotFound Uusário não encontrado.
//  *
//  * @apiErrorExample Error-Response:
//  *     HTTP/1.1 404 Not Found
//  *     {
//  *       "error": 'Client not found!'
//  *     }
//  *
router.get('/', controller.get)
// **
//  * @api {get} /usuarios Buscar usuários
//  * @apiName get
//  * @apiGroup User
//  * 
//  * @apiSuccessExample Success-Response:
//  *     HTTP/1.1 200 OK
//  *     {
//  *      "_id": "5df3afd6951a08341830489e",
//  *      "nome": "Natalia de Jesus Silva",
//  *      "email": "nataliajsilva2@outlook.com",
//  *      "senha": "$2a$10$Nhs2GquEHPp/kcP/NDu.d.ZgBEVcHVeGVtR0MIGTWL1eBZa4sGYwe",
//  *      "createdAt": "2019-12-13T15:35:50.283Z"
//  *     }
//  *

module.exports = router