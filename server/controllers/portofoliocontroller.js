const { error } = require('console');
const portofolioModels = require('../models/portofoliomodels')

exports.getAllPortofolio = async (req, res) => {
    try {
        const id = req.params.id
        const getPortofolioData = await portofolioModels.findAll({})
        const foundPortofolioId = getPortofolioData.find(portofolio => portofolio.id === id)
        if (!foundPortofolioId) {
            res.status(404).json({
                sucess: false,
                message: 'data kosong',
                data: null
            })
        }
        res.status(200).json({
            sucess: true,
            data: getPortofolioData
        })
        console.log(getPortofolioData);
    } catch (err) {
        console.error(`error occured : ${err}`);
        res.status(500).json({
            sucess: false,
            error: err.message
        })

    }
}

exports.getPortofolioId = async (req, res) => {
    try {
        const { id } = req.params;
        const getIdResponse = await portofolioModels.findOne({
            where: { id },
        });

        if (!getIdResponse) {
            return res.status(404).json({
                success: false,
                message: "Portofolio not found",
                data: null,
            });
        }

        const additionalData = await portofolioModels.findAll({
            where: {
                category: getIdResponse.category,
                id: { $ne: id },
            },
            limit: 3,
            order: [["createdAt", "DESC"]],
        });

        res.status(200).json({
            success: true,
            message: `Portofolio ID: ${id} found`,
            data: {
                portofolio: getIdResponse,
                relatedPortofolios: additionalData,
            },
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "An error occurred",
            error: err.message,
        });
    }
};
