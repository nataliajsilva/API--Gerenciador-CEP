const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UsuariosSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    senha: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
},
    {
        versionKey: false,
    }
)


UsuariosSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;

    next();
});

const Usuarios = mongoose.model('usuarios', UsuariosSchema);

module.exports = Usuarios;