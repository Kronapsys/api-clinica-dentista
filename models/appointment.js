"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Customer, {
        as: "customer",
        foreignKey: "customerId",
        targetKey: 'id'
      });
    }
  }
  Appointment.init(
    {
      date: DataTypes.DATE,
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Appointment",
    }
  );
  return Appointment;
};
