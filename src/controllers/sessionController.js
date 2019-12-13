const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const usuarios = require('../model/usuarios');
const bcrypt = require('bcryptjs');

function checkPassword(passwordEntry, senha) {
    console.log(passwordEntry, 'aqui é a senha do usuário')
    console.log(senha, 'aqui é a senha do BD')
    return bcrypt.compareSync(passwordEntry, senha)
}

exports.getToken = (req, res) => {
    const { nome, senha: passwordEntry } = req.body;
    const user = usuarios.find(item => item.nome == nome);

    if (!user) {
        return res.status(401).send({ error: 'Client not found!' });
    }

    
    const { id, nome, hasPass } = user;

    try {
        checkPassword(passwordEntry, hasPass);
    } catch (err) {
        return res.status(401).send({ error: 'password does not match!' });
    }

    try {
        return res.json({
            user: {
                id,
                nome,
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