const sequelize = require('sequelize')
const db = require('../config/db')
const { type } = require('os')

exports.product = db.define("product", {
    id_product: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    url_image: {
        type: sequelize.STRING,
        allowNull: false
    },
    product_name: {
        type: sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize.TEXT,
        allowNull: false
    },
    price_product: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    stock_product: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    category_id: {
        type: sequelize.STRING,
        allowNull: false,
        references: {
            model: 'categories',
            key: 'id_category'
        }
    }
}, {
    tableName: 'products',
    timestamps: true
});