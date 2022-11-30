const Sequelize = require("sequelize");
const db = require("../db");

const Artist = db.define("artist", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  Artist_Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Artist;
