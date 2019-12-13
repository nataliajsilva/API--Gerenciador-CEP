const mongoose = require('mongoose');

const CEPsSchema = new mongoose.Schema({

    cep: { type: String },
    logradouro: { type: String },
    bairro: { type: String },
    cidade: { type: String },
    estado: { type: String },
    ocorrencias: [{
        data: { type: String },
        hora: { type: String },
        valorAgregado: {type: String},
        descricao: { type: String }
    }],
    qtdOcorrencias: { type: Number },
    periculosidade: { type: String }
}, {
    versionKey: false
})

const CEPs = mongoose.model('CEPs', CEPsSchema);

module.exports = CEPs;