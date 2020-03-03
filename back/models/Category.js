const db = require('../config/db/index')
const S = require('sequelize')

class Category extends S.Model { }

Category.init({
    Name: {
        type: S.STRING,
        allowNull: false
    }
}, { sequelize: db, modelName: 'category' })

module.exports = Category