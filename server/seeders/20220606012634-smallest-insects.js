"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Insects", [
      {
        name: "Western Pygmy Blue Butterfly",
        millimeters: 12.0,
      },
      {
        name: "Patu Digua Spider",
        millimeters: 0.33,
      },
      {
        name: "Scarlet Dwarf Dragonfly",
        millimeters: 20.0,
      },
      {
        name: "Midget Moths",
        millimeters: 25.0,
      },
      {
        name: "Bolbe Pygmaea Mantis",
        millimeters: 10.0,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete("Insects", null, {});
  },
};
