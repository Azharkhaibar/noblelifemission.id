const sequelize = require('sequelize')
const db = require('../config/db')

exports.category = db.define("category", {
    id_category: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_category: {
        type: sequelize.STRING,
        allowNull: false
    },
    description: {
        type: sequelize.TEXT,
        allowNull: false
    }
}, {
    tableName: 'categories',
    timestamps: false
})