const Sequelize = require('sequelize')
const sequelize = new Sequelize('bdaplicacao', 'vitorpchaves', '123projetei', {
    dialect: 'mysql',
    host: 'db4free.net',
    port: 3306
})
module.exports = sequelize