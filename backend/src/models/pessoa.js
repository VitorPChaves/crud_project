const Sequelize = require('sequelize')
const database = require('../database/db')

const Pessoa = database.define('pessoa', {
    cpf: {
        type: Sequelize.CHAR,
        autoIncrement: false,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false
    }
})

module.exports = Pessoa