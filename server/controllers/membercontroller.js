const { where } = require("sequelize");
const anggotaModels = require("../models/membermodels");
exports.memberPost = async (req, res) => {
  try {
    const { name, nickname, age, email, funfact, ability, hobby, phone_number, description } = req.body;
    const postResponse = await anggotaModels.create({
      name,
      nickname,
      age,
      email,
      funfact,
      ability,
      hobby,
      phone_number,
      description,
    });
    res.status(201).json({
      success: true,
      message: "Member posted successfully",
      data: postResponse,
    });
  } catch (error) {
    console.error("Failed to post member", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while posting member",
      error: error.message,
    });
  }
};

exports.getMember = async (req, res) => {
  try {
    const getResponse = await anggotaModels.findAll({});
    res.status(200).json({
      success: true,
      message: "Fetched member data successfully",
      data: getResponse,
    });
  } catch (error) {
    console.error("Failed to fetch members", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching members",
      error: error.message,
    });
  }
};

exports.getMemberById = async (req, res) => {
  try {
    const id_member = req.params.id;
    const getIdResponse = await anggotaModels.findOne({
      where: { id_member: id_member },
    });

    if (!getIdResponse) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Fetched member data successfully",
      data: getIdResponse,
    });
  } catch (error) {
    console.error("Failed to fetch member by ID", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching member by ID",
      error: error.message,
    });
  }
};

exports.UpdateMember = async (req, res) => {
  try {
    const { name, nickname, age, email, funfact, ability, hobby, phone_number, description } = req.body;
    const id_member = req.params.id;

    const existingMember = await anggotaModels.findOne({ where: { id_member: id_member } });

    if (!existingMember) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
      });
    }

    await anggotaModels.update(
      {
        name,
        nickname,
        age,
        email,
        funfact,
        ability,
        hobby,
        phone_number,
        description,
      },
      {
        where: {
          id_member: id_member,
        },
      }
    );

    res.status(200).json({
      success: true,
      message: "Member updated successfully",
    });
  } catch (error) {
    console.error("Failed to update member", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while updating member",
      error: error.message,
    });
  }
};
