const CEPs = require('../model/CEPs');
const fetch = require('node-fetch');

exports.postCep = async function (req, res) {
    let enderecamento = new CEPs(req.body);

    enderecamento.logradouro = await buscarCeps(enderecamento.cep).then(endereco => endereco.logradouro)
    enderecamento.bairro = await buscarCeps(enderecamento.cep).then(bairro => bairro.bairro)
    enderecamento.cidade = await buscarCeps(enderecamento.cep).then(cidade => cidade.localidade)
    enderecamento.estado = await buscarCeps(enderecamento.cep).then(estado => estado.uf)

    enderecamento.save(function (err) {
        if (err) res.status(500).send(err);
        else {
            res.status(201).send({
                status: true,
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

exports.getCeps = (req, res) => {
    const filter = req.query
    CEPs.find(filter, function (err, ceps) {
        if (err) res.status(500).send(err);
        ceps.map(cep => {
            cep.qtdOcorrencias = cep.ocorrencias.length
        })

        ceps.map(cep => {
            if (cep.qtdOcorrencias <= 2) {
                cep.periculosidade = "baixa"
            } else if (cep.qtdOcorrencias > 2 && cep.qtdOcorrencias < 4) {
                cep.periculosidade = "média"
            } else {
                cep.periculosidade = "alta"
            }
        })

        res.status(200).send(ceps);
    })
}

exports.getCep = (req, res) => {
    const cep = req.params.cep
    CEPs.find(function (err, enderecamento) {
        if (err) return res.status(500).send(err);

        if (!enderecamento) {
            return res.status(200).send({ message: 'Infelizmente CEP não localizado' });
        }
        enderecamento.map(cep => {
            cep.qtdOcorrencias = cep.ocorrencias.length
        })

        enderecamento.map(cep => {
            if (cep.qtdOcorrencias <= 2) {
                cep.periculosidade = "baixa"
            } else if (cep.qtdOcorrencias > 2 && cep.qtdOcorrencias < 4) {
                cep.periculosidade = "média"
            } else {
                cep.periculosidade = "alta"
            }
        })
        res.status(200).send(enderecamento.filter(enderecamento => enderecamento.cep == cep))
    })
}


exports.getCep = (req, res) => {
    const cep = req.params.cep
    CEPs.find(function (err, enderecamento) {
        if (err) return res.status(500).send(err);

        if (!enderecamento) {
            return res.status(200).send({ message: 'Infelizmente CEP não localizado' });
        }
        enderecamento.map(cep => {
            cep.qtdOcorrencias = cep.ocorrencias.length
        })

        enderecamento.map(cep => {
            if (cep.qtdOcorrencias <= 2) {
                cep.periculosidade = "baixa"
            } else if (cep.qtdOcorrencias > 2 && cep.qtdOcorrencias < 4) {
                cep.periculosidade = "média"
            } else {
                cep.periculosidade = "alta"
            }
        })
        res.status(200).send(enderecamento.filter(enderecamento => enderecamento.cep == cep))
    })
}

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