const Usuarios = require('../model/usuarios')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')


function geraToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
    });
}
exports.get = (req, res) => {
    Usuarios.find(usuarios)
        .then(() => {
            return res.status(200).send({ usuarios });
        })
        .catch((err) => {
            return res.status(400).send({ message: err });
        })
}
exports.post = (req, res) => {
    const usuario = new Usuarios(req.body)
    usuario.save()
        .then(() => {
            return res.status(201).send(usuario)
        }).catch((err) => {
            return status(400).send({ message: err });
        });

}

function checkPassword(passwordEntry, senha) {
    console.log(passwordEntry, 'aqui é a senha do usuário')
    console.log(senha, 'aqui é a senha do BD')
    return bcrypt.compare(passwordEntry, senha)
}

exports.postAuth = async (req, res) => {
    const { email, senha } = req.body;

    const user = await Usuarios.find({ email });

    if (!user) {
        return res.status(401).send({ error: 'Client not found!' });
    }

    const { id, name } = user;

    try {
        checkPassword(senha, user.senha);
    } catch (err) {
        return res.status(401).send({ error: 'password does not match!' });
    }

    try {
        return res.json({
            user: {
                id,
                name,
            },
            token: jwt.sign({ id }, authConfig.secret,
                {
                    expiresIn: authConfig.expiresIn
                }),
        })
    } catch (err) {
        return res.status(401).send({ error: err })
    }
}

exports.get = (req, res) => {
    Usuarios.find()
        .then((usuarios) => {
            res.status(200).send(usuarios)
        })
        .catch((err) => {
            res.status(400).send({ message: err });
        });
} 