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
          isTitleCased(val) {
            const allWords = val.split(" ").filter((word) => word !== "");
            const isAnyWordLowerCase = allWords.find((word) => word === word.toLowerCase());

            if (isAnyWordLowerCase.length > 0) throw new Error("Each word must be capitalized!");
          },
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
