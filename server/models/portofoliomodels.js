const db = require('../config/db')
const sequelize = require('sequelize')

const PortofolioModels = db.define('portofolio', {
    id_portofolio: {
        type: sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    url_karya: {
        type: sequelize.STRING,
        allowNull: null
    },
    nama_karya: {
        type: sequelize.STRING,
        allowNull: false
    },
    kategori_karya: {
        type: sequelize.STRING,
        allowNull: false
    },
    pemilik_karya: {
        type: sequelize.STRING,
        allowNull: false
    },
    deskripsi_karya: {
        type: sequelize.TEXT,
        allowNull: false
    },
    bidang_karya: {
        type: sequelize.STRING,
        allowNull: false
    }
}, {
    tableName: 'portofolio_member',
    timestamps: true
})