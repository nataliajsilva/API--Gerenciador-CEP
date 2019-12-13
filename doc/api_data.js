define({ "api": [
  {
    "type": "delete",
    "url": "/ceps/:id",
    "title": "Excluir CEP",
    "name": "deleteCep",
    "group": "Sistema",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Cadastro único do CEP.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"CEP removido com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IDNotFound",
            "description": "<p>ID não encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ID não encontrado\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/CEPsRoute.js",
    "groupTitle": "Sistema"
  },
  {
    "type": "get",
    "url": "/ceps/:cep",
    "title": "Buscar por CEP",
    "name": "getCep",
    "group": "Sistema",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CEP",
            "description": "<p>Endereçamento Postal único.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CEP",
            "description": "<p>Buscar CEP.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n  \"_id\": \"5dea90fd1939d51a342d350b\",\n  \"cep\": \"04236094\",\n  \"ocorrencias\": [\n     {\n          \"data\": \"15/12/2019\",\n          \"hora\": \"12:00\",\n          \"segProduto\": \"eletronico\"\n       },\n       {\n          \"data\": \"20/11/2019\",\n          \"hora\": \"09:00\",\n          \"segProduto\": \"eletronico\",\n          \"descricao\": \"Carro abordado em movimento\"\n     }\n  ],\n  \"logradouro\": \"Rua 2 de Fevereiro\",\n  \"bairro\": \"Cidade Nova Heliópolis\",\n  \"cidade\": \"São Paulo\",\n  \"estado\": \"SP\",\n  \"qtdOcorrencias\": 2,\n  \"periculosidade\": \"baixa\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CEPNotFound",
            "description": "<p>CEP não encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CEPNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/CEPsRoute.js",
    "groupTitle": "Sistema"
  },
  {
    "type": "get",
    "url": "/ceps",
    "title": "Buscar CEPs cadastrados",
    "name": "getCeps",
    "group": "Sistema",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{ \n  \"_id\": \"5dea90fd1939d51a342d350b\",\n  \"cep\": \"04236094\",\n  \"ocorrencias\": [\n     {\n          \"data\": \"15/12/2019\",\n          \"hora\": \"12:00\",\n          \"segProduto\": \"eletronico\"\n       },\n       {\n          \"data\": \"20/11/2019\",\n          \"hora\": \"09:00\",\n          \"segProduto\": \"eletronico\",\n          \"descricao\": \"Carro abordado em movimento\"\n     }\n  ],\n \"logradouro\": \"Rua 2 de Fevereiro\",\n  \"bairro\": \"Cidade Nova Heliópolis\",\n \"cidade\": \"São Paulo\",\n \"estado\": \"SP\",\n  \"qtdOcorrencias\": 2,\n  \"periculosidade\": \"baixa\"\n},\n{\n \"_id\": \"5deab57ebd936b1104011e65\",\n  \"cep\": \"06280120\",\n  \"ocorrencias\": [\n      {\n         \"data\": \"02/12/2019\",\n          \"hora\": \"12:00\",\n          \"segProduto\": \"bebidas\",\n          \"descrição\": \" teste\"\n     },\n      {\n         \"data\": \"01/12/2019\",\n          \"hora\": \"12:00\",\n          \"segProduto\": \"eletronico\",\n          \"descrição\": \"teste\"\n     },\n      {\n         \"data\": \"03/12/2019\",\n          \"hora\": \"12:00\",\n         \"segProduto\": \"eletronico\",\n          \"descricao\": \"teste\"\n     },\n      {\n         \"data\": \"20/11/2019\",\n          \"hora\": \"09:00\",\n         \"segProduto\": \"eletronico\",\n          \"descricao\": \"teste 2\"\n     }\n  ],\n  \"logradouro\": \"Rua Arara\",\n  \"bairro\": \"Ayrosa\",\n  \"cidade\": \"Osasco\",\n  \"estado\": \"SP\",\n  \"qtdOcorrencias\": 4,\n  \"periculosidade\": \"alta\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/CEPsRoute.js",
    "groupTitle": "Sistema"
  },
  {
    "type": "get",
    "url": "/ceps/local/:cidade",
    "title": "Buscar por cidade",
    "name": "getCidades",
    "group": "Sistema",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Cidade",
            "description": "<p>Nome da cidade.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CEP",
            "description": "<p>CEPs cadastrados com essa cidade.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n  \"_id\": \"5dea90fd1939d51a342d350b\",\n  \"cep\": \"04236094\",\n  \"ocorrencias\": [\n     {\n          \"data\": \"15/12/2019\",\n          \"hora\": \"12:00\",\n          \"segProduto\": \"eletronico\"\n       },\n       {\n          \"data\": \"20/11/2019\",\n          \"hora\": \"09:00\",\n          \"segProduto\": \"eletronico\",\n          \"descricao\": \"Carro abordado em movimento\"\n     }\n  ],\n  \"logradouro\": \"Rua 2 de Fevereiro\",\n  \"bairro\": \"Cidade Nova Heliópolis\",\n  \"cidade\": \"São Paulo\",\n  \"estado\": \"SP\",\n  \"qtdOcorrencias\": 2,\n  \"periculosidade\": \"baixa\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/CEPsRoute.js",
    "groupTitle": "Sistema"
  },
  {
    "type": "post",
    "url": "/ceps",
    "title": "Cadastro de CEP",
    "name": "postCep",
    "group": "Sistema",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CEP",
            "description": "<p>Endereçamento Postal único.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CEP",
            "description": "<p>Cadastro do CEP.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"mensagem\": \"Cep incluído com sucesso\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CEPNotFound",
            "description": "<p>CEP não encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CEPNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/CEPsRoute.js",
    "groupTitle": "Sistema"
  },
  {
    "type": "put",
    "url": "/ceps/:cep/ocorrencias/:ocorrencia",
    "title": "Alterar ocorrência",
    "name": "updateOcorrencia",
    "group": "Sistema",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CEP",
            "description": "<p>Endereçamento Postal único.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>Ocorrência Cadastro único da ocorrência.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"Ocorrência atualizada com sucesso!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>CEP não encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CEP não encontrado\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/CEPsRoute.js",
    "groupTitle": "Sistema"
  },
  {
    "type": "auth",
    "url": "/",
    "title": "Autenticação de usuario",
    "name": "authMiddleware",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senha",
            "description": "<p>Senha do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Token da senha do usuário.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"user\": {},\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzYyNTE2NDQsImV4cCI6MTU3NjUxMDg0NH0.X1hjAtk_hyPnU8BKjw5gk90Z4Uy72xd166K6N8F583M\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/CEPsRoute.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/ceps/:cep",
    "title": "Cadastro de ocorrências",
    "name": "postOcorrencias",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CidadeNotFound",
            "description": "<p>Cidade não encontrada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Not Found\n{\n  \"menssagem\": \"Infelizmente não localizamos a cidade\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/CEPsRoute.js",
    "groupTitle": "User"
  }
] });
