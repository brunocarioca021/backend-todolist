const mongoose = require('mongoose');

const Database = (url, user, pass, data) => {
    mongoose.connect(`${url}/${data}`, {
        user: user,
        pass: pass,
        useNewUrlParser: true
    }).then(() => {
        console.log('MONGO DB CONECTADO')
    }).catch((err) => {
        return console.log(`Erro ao conectar com o banco: ${err}`)
    })
}

module.exports = Database;