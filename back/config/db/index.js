const sequelize = require('sequelize')

const db = new sequelize('postgres://localhost:5432/botanicabinaria', {
    logging: false,
    dialect: 'postgres'
})

module.exports = db


