"use strict";
const { Model } = require("sequelize");
const { sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.hasMany(models.Appointment, {
      //   as: "appointment",
      //   foreignKey: "customerId",
      // });
    }
  }
  Customer.init(
    {
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      address: DataTypes.STRING,
      telephone: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};