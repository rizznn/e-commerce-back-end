const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
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
    // 
    product_id: {
      type: DataTypes.INTEGER,
      // references the product model's id
      references: {
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      // references the tag model's id
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
