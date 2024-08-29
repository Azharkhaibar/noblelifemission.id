const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Anggota = db.define(
  "member",
  {
    id_member: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    funfact: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ability: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hobby: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "anggota",
    timestamps: true, 
  }
);

module.exports = Anggota;
