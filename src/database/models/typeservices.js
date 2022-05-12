"use strict"
module.exports = (sequelize, DataTypes) => {
  const typeservices = sequelize.define(
    "typeservices", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
    }, {
      timestamps: false
    }
  );
  typeservices.associate = (models) => {
  };
  return typeservices;
}