const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define an id column
    id: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      // doesn't allow null values/ SQL's `NOT NULL` option
      allowNull: false,
      // instruct that this is the Primary Key/set as primary key
      primaryKey: true,
      // uses auto increment
      autoIncrement: true
    },
    // define a tag name column
    tag_name: {
      type: DataTypes.STRING,
    }    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
