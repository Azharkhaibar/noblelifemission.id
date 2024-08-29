const ModelsUser = require('../models/usermodels')
const bcrypt = require('bcryptjs')
const ValidateUser = require('../middleware/validation');
const { where } = require('sequelize');

exports.Register = async (req, res) => {
    try {
      const { id_user, username, password, email } = req.body;
      const { error } = ValidateUser(req.body);
      if (error) return res.status(400).send(error.details[0].message);
      const ExistingUser = await ModelsUser.findOne({
        where: {email}
      })

      if(ExistingUser) {
        res.status(400).json({
            sucess: false,
            message: 'user not found!',
            data: null
        })
      }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await ModelsUser.create({
        id_user,
        username,
        password: hashedPassword,
        email
    })
    res.status(201).json(newUser);
    } catch (error) {
        console.error('error regist', error);
        res.status(500).json({
            sucess: false,
            message: 'error while regist',
            error: error.message
        })
    }
}

exports.getRegisterData = async (req, res) => {
    try {
        const getResponse = await ModelsUser.findAll({})
        res.status(200).json({
            sucess: true,
            message: 'berhasil fetch data',
            data: getResponse
        })
    } catch (error) {
         console.error("error regist", error);
         res.status(500).json({
           sucess: false,
           message: "error while regist",
           error: error.message,
         });
    }
}

exports.getRegisterDataById = async (req, res) => {
    try {
        const id = req.params.id
        const getIdResponse = await ModelsUser.findOne({
            where: {id: id}
        })

        if(!getIdResponse) {
            res.status(400).json({
                sucess: false,
                message: 'id not found',
                data: null
            })
        }

        res.status(200).json({
            sucess: true,
            message: 'berhasil mendapatkan id',
            data: getIdResponse
        })
    } catch (error) {
        console.error("error fetching data", error);
        res.status(500).json({
          sucess: false,
          message: `fetch ${id} failed`,
          error: error.message,
        });
    }
}

exports.updateRegisterData = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const id_user = req.params.id
        const activeUser = await ModelsUser.findOne({
            where: { id_user }
        })

        if (!activeUser) {
            res.status(404).json({
                sucess: false,
                message: 'failed update data',
                data: null
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const updateResponse = await ModelsUser.create({
            username, password: {hashedPassword}, email
        }, {
            where: { id_user }
        });

        res.status(200).json({
            message: 'data register berhasil di update',
            data: updateResponse
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send(`Update data ${id_user} tidak berhasil`);
    }
}