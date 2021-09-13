// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
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
    // define a product name column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // define an price column
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      // if allowNull is set to false, we can run our data through validators before creating the table data
      // validates that the value is a decimal
      validate: {
        isDecimal: true
      }
    },
    // define a stock column
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // set a default value of 10
      defaultValue: 10,
      validate: {
        // validates that the value is numeric
        isNumeric: true
      }
    },
    // category id
    category_id: {
      type: DataTypes.INTEGER,
      // references the category model's id
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
