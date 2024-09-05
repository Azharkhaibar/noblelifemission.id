const { where } = require('sequelize');
const ProductModels = require('../models/productmodels')

exports.getProduct = async (req, res) => {
    try {
        const getProduct = await ProductModels.findAll({});
        if (getProduct) {
            console.log(
                "data berhasil di fetch"
            );
        }
        res.status(200).json({
            success: true,
            message: "data berhasil di fecth",
            data: getProduct
        })
    } catch (error) {
        console.error('error occured: ', error);
        res.status(500).json({
            success: false,
            message: "data gagal di fetch",
            error: error.message,
        })
    }
}


exports.postProduct = async (req, res) => {
    try {
        const {
            url_image,
            product_name,
            description,
            price_product,
            stock_product,
            category_id
        } = req.body;
        const PostResponse = await ProductModels.create({
            url_image, product_name, description, price_product, stock_product, category_id
        })

        if (!url_image || !product_name || !category_id) {
            res.status(400).json({
                success: false,
                message: "invalid post",
                data: null
            })
        }

        await PostResponse.save();
        res.status(200).json({
            success: true,
            message: "berhasil post product",
            data: PostResponse,
        });
    } catch (error) {
        console.error("error occured: ", error);
        res.status(500).json({
            success: false,
            message: "data gagal di post",
            error: error.message,
        });
    }
}

exports.getProductById = async (req, res) => {
    try {
        const id = req.params.id
        const getProductId = await ProductModels.findOne({
            where: {
                id: id
            }
        });

        if (!getProductId) {
            res.status(400).json({
                success: false,
                message: "product not found",
                data: null
            })
        }

        res.status(200).json({
            success: true,
            message: "berhasil fetch id product",
            data: this.getProductById
        })
    } catch (error) {
        console.error("error occured: ", error);
        res.status(500).json({
            success: false,
            message: "data gagal di post",
            error: error.message,
        });
    }
}

exports.updateProduct = async (req, res) => {
    try {
         const { url_image, product_name, description, price_product, stock_product, category_id } = req.body;
         const id = req.params.id
         const ExistingProduct = await ProductModels.findOne({
            where: {
                id: id
            }
         })

         if(!ExistingProduct) {
            return res.status(404).json({
              success: false,
              message: "Product not found",
            });
         }

         await ProductModels.update({
            url_image, product_name, description, price_product, stock_product, category_id
         }, {
            where: { id }
         })

         res.status(200).json({
            success: true,
            message: "berhasil update product",
         })
    } catch (error) {
         console.error("error occured: ", error);
         res.status(500).json({
           success: false,
           message: "data gagal di post",
           error: error.message,
         });
    }
}