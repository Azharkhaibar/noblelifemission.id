const ModelsUser = require("../models/usermodels");
const bcrypt = require("bcryptjs");
const ValidateUser = require("../middleware/validation");
const { where } = require("sequelize");

exports.Register = async (req, res) => {
  try {
    const { id_user, username, password, email } = req.body;
    const { error } = ValidateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await ModelsUser.create({
      id_user,
      username,
      password: hashedPassword,
      email,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({
      success: false,
      message: "Error while registering",
      error: error.message,
    });
  }
};

exports.getRegisterData = async (req, res) => {
  try {
    const getResponse = await ModelsUser.findAll();
    res.status(200).json({
      success: true,
      message: "Successfully fetched data",
      data: getResponse,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({
      success: false,
      message: "Error while fetching data",
      error: error.message,
    });
  }
};


exports.getRegisterDataById = async (req, res) => {
  try {
    const id_user = req.params.id;
    const getIdResponse = await ModelsUser.findOne({ where: { id_user } });

    if (!getIdResponse) {
      return res.status(400).json({
        success: false,
        message: "ID not found",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Successfully retrieved ID",
      data: getIdResponse,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({
      success: false,
      message: `Failed to fetch data for ID: ${req.params.id}`,
      error: error.message,
    });
  }
};

exports.updateRegisterData = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const id_user = req.params.id;
    const activeUser = await ModelsUser.findOne({ where: { id_user } });

    if (!activeUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        data: null,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await ModelsUser.update({ username, password: hashedPassword, email }, { where: { id_user } });

    res.status(200).json({
      message: "Successfully updated user data",
    });
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).send(`Failed to update data for ID: ${id_user}`);
  }
};
