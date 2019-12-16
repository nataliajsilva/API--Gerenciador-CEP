const CEPs = require('../model/CEPs');
const fetch = require('node-fetch');

//Cadastrar CEP
exports.postCep = async function (req, res) {
    let enderecamento = new CEPs(req.body);

    enderecamento.logradouro = await buscarCeps(enderecamento.cep).then(endereco => endereco.logradouro)
    enderecamento.bairro = await buscarCeps(enderecamento.cep).then(bairro => bairro.bairro)
    enderecamento.cidade = await buscarCeps(enderecamento.cep).then(cidade => cidade.localidade)
    enderecamento.estado = await buscarCeps(enderecamento.cep).then(estado => estado.uf)

    enderecamento.save(function (err, ) {
        if (err) res.status(500).send(err);
        else {
            res.status(201).send({
                mensagem: "Cep incluído com sucesso"
            });
        }
    });
}

const buscarCeps = (cep) => {

    return fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(json => json)

}

//Burcar todos os CEPs cadastrados
exports.getCeps = (req, res) => {
    const filter = req.query
    CEPs.find(filter, function (err, enderecamento) {
        if (err) res.status(500).send(err);

        dadosAdicionais(enderecamento)

        res.status(200).send(enderecamento);
    })
}

//Buscar por CEP
exports.getCep = (req, res) => {
    const cep = req.params.cep
    CEPs.find(function (err, enderecamento) {
        if (err) return res.status(500).send(err);

        if (!enderecamento) {
            return res.status(200).send({ message: 'Infelizmente CEP não localizado' });
        }

        dadosAdicionais(enderecamento)

        res.status(200).send(enderecamento.filter(enderecamento => enderecamento.cep == cep))
    })
}

//Buscar CEPs cadastrados por cidade
exports.getCidades = (req, res) => {
    const cidade = req.params.cidade
    CEPs.find({ cidade: cidade }, function (err, enderecamento) {
        if (err) return res.status(500).send(err);

        if (!enderecamento) {
            return res.status(200).send({ message: 'Infelizmente não localizamos a cidade' });
        }

        dadosAdicionais(enderecamento)

        res.status(200).send(enderecamento)
    })
}

//Função para adicionar campos: quantidade de ocorrência e periculosidade
function dadosAdicionais(enderecamento) {
    return enderecamento.map(cep => {
        cep.qtdOcorrencias = cep.ocorrencias.length

        if (cep.qtdOcorrencias <= 2) {
            cep.periculosidade = "baixa"
        } else if (cep.qtdOcorrencias > 2 && cep.qtdOcorrencias < 4) {
            cep.periculosidade = "média"
        } else {
            cep.periculosidade = "alta"
        }
    })

}

//Cadastrar ocorrência em um CEP
exports.postOcorrencias = (req, res) => {
    const cep = req.params.cep;
    CEPs.findOne({ cep: cep }, function (err, cep) {
        if (err) {
            res.status(404).send({ message: "CEP não localizado" })
            return
        }
        cep.ocorrencias.push(req.body);
        cep.save(function (err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).send({ message: "Ocorrência incluida com sucesso" })
            }
        })
    })
}

//Alterar propriedades ocorrência
exports.updateOcorrencia = (req, res) => {
    const cep = req.params.cep;
    const OcorrenciaId = req.params.ocorrencia;

    const encontratCep = CEPs.findOne({ cep: cep }, function (err, cep) {
        if (err) {
            res.status(404).send({ message: "CEP não localizado" })
            return
        } else {
            let updateObj = { $set: {} };
            for (var param in req.body) {
                updateObj.$set['ocorrencias.$.' + param] = req.body[param];
            }

            CEPs.update(
                { 'ocorrencias._id': OcorrenciaId },
                updateObj,
                { upsert: true },
                function (err) {
                    if (err) return res.status(500).send({ message: err });
                    res.status(200).send({ message: "Ocorrência atualizada com sucesso!" })
                }
            )
        }
    })

}

//Remover CEP
exports.deleteCep = (req, res) => {
    let idCep = req.params.id;

    CEPs.findById(idCep, function (err, enderecamento) {
        if (err) return res.status(500).send(err);

        if (!enderecamento) {
            return res.status(200).send({ message: "Infelizmente não localizamos o CEP" })
        }
        enderecamento.remove(function (err) {
            if (!err) {
                res.status(200).send({ message: "CEP removido com sucesso" })
            }
        })
    })
}