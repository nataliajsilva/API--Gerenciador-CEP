const CEPs = require('../model/CEPs');
const fetch = require('node-fetch');

exports.get = (req, res) => {
    const filter = req.query
    CEPs.find(filter, function (err, ceps) {
        if (err) res.status(500).send(err);
        res.status(200).send(ceps);
    })
}

exports.post = async function (req, res) {
    let enderecamento = new CEPs(req.body);

    enderecamento.logradouro = await buscarCeps(enderecamento.cep).then(endereco => endereco.logradouro)

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