const mongoose = require('mongoose');

const CEPsSchema = new mongoose.Schema({
    
    nome: { type: String },
    email: {type: String, /*required: true*/},
    cpf: {type: Number},
    dataNascimento: { type: Date },
    estadoCivil: { type: String},
    telefone: {type: Number},
    comprou: {type: Boolean},
    cep: {type: String},
    logradouro: {type: String}
}, {
    versionKey: false
})

const CEPs = mongoose.model('CEPs', CEPsSchema);

module.exports = CEPs;