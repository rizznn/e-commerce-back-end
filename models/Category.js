const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
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
    // define a category name column
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
