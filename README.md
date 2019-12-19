## Projeto de conclusão do curso back-end da {reprograma} + Mercado Livre

#### O objetivo do projeto livre é reunir os conceitos estudados durante o curso de desafiar as alunas a colocar os seus conhecimentos em prática.

## Cenário

#### O cenário base do projeto foi o roubo de carga no Brasil. Onde existe muitos grupos criminoso especializados que visam roubar tanto cargas de grande porte, como entrega em container, quanto entrega de pequeno porte em vans para o e-commerce. 

#### Segundo o site ecommercebrasil, em 2018 na região sudeste do país, foram registradas 89,79% de ocorrências. Sendo 39,39% em São Paulo e 41,39% no Rio de Janeiro.

#### fonte: https://www.ecommercebrasil.com.br/noticias/relatorio-roubos-de-cargas/

#### "O problema na segurança já fica aparente para o cliente de e-commerce. Grandes varejistas do setor já informam no ato da compra que não realizam a entrega, caso o cep informado pelo cliente conste nas listas de áreas de risco. Além disso, as empresas de logística aumentaram o valor do serviço de entrega para o Rio de Janeiro, fazendo com que o custo de frete seja mais caro para a região."

#### fonte: https://exame.abril.com.br/negocios/dino aumento-de-areas-de-risco-geram-prejuizos-para-o-e-commerce-no-rio-de-janeiro/

#### "Uma importante player no e-commerce, a companhia também apostou pesado na operação “clique-e-retire”, que permite que clientes retirem seus pedidos feitos online em lojas físicas da Via Varejo. O programa é popular entre consumidores da classe trabalhadora que gostam da segurança, e isto significa menos caminhões de entrega passando por bairros perigosos, disse Lopes.

#### A varejista brasileira Magazine Luiza implementou um modelo parecido para impulsionar suas vendas on-line. Ainda assim, a empresa está evitando expansão no Estado do Rio, em parte por temores de roubo de cargas, disse a presidente Luiza Trajano no ano passado.

#### Infraestrutura ruim, impostos pesados e burocracias complicadas há tempos tornam o envio de carga no país caro. O aumento de roubo de cargas só acrescentou ao fardo."

#### fonte: https://www.metrojornal.com.br/foco/2018/05/30/ladroes-de-carga-prejudicam-e-commerce-no-brasil.html

## Projeto Gerenciador de CEP

#### O projeto Gerenciador de CEP, tem como objetivo permitir a inclusão de ocorrências de roubo de carga em um local, determinando a periculosidade do mesmo. Para tomadas de decisões nas operações de entrega ecommerce, visando reduzir as perdas.

## Rotas/EndPoints

### Sistema

#### GET /ceps Rota que retorna uma lista com todos os ceps cadastrados. HTTP 200 OK

#### GET /ceps/:cep Rota que retorna um CEP específico se cadastrado. HTTP 200 OK

#### GET /ceps/local/:cidade Rota que retorna registros de CEP que possuem a cidade específica. HTTP 200 OK

#### POST /ceps Rota para cadastro de CEP. HTTP 201 CREATED

#### POST /ceps/registroOcorrencia/:cep Rota para registro de ocorrência em um determinado CEP. HTTP 201 CREATED

#### /authMiddleware Para as rotas PUT e DELETE, será necessário autenticação do usuário através de token.

#### PUT /ceps/:cep/alterarOcorrencia/:ocorrencia Rota para alterar uma ocorrência específica em um determinado CEP. HTTP 200 SUCESS 

#### DELETE /ceps/:id Rota para excluir um determinado CEP. HTTP 204 NO CONTENT

### Usuário

#### GET /usuarios Rota que retorna uma lista com todos os usuários cadastrados. HTTP 200 OK

#### POST /usuarios Rota para cadastro de usuário. HTTP 201 CREATED

#### POST /usuarios/auth Rota para gerar token de um determinado usuário. HTTP 201 CREATED

## Tecnologias aplicadas

#### • API REST
#### • NodeJS
#### • MongoDB Atlas
#### • JavaScript
#### • Apidoc


#### Agradeço pela oportunidade de participar desse curso com mulheres incríveis, em um lugar dos sonhos (Meli ♥), de adquirir muitos conhecimentos e por me sentir integrada no mundo da tecnologia!


![minions agradecimento](https://github.com/nataliajsilva/API--Gerenciador-CEP/blob/master/gif%20minions.gif)



