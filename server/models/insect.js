"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Insect.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isUppercase: { msg: "Name must be uppercase" },
        },
      },
      description: DataTypes.STRING,
      territory: DataTypes.STRING,
      fact: {
        type: DataTypes.STRING,
      },
      millimeters: {
        type: DataTypes.FLOAT,
        allowNull: false,
        min: 0,
      },
    },
    {
      sequelize,
      modelName: "Insect",
    }
  );
  return Insect;
};
