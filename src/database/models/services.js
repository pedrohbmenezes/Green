"use strict"
module.exports = (sequelize, DataTypes) => {
  const services = sequelize.define(
    "services", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      repeat: {
        type: DataTypes.BOOLEAN,
        notNull: true,
      },
      repeatDay: {
        type: DataTypes.STRING
      },
      repeatLimit: {
        type: DataTypes.DATEONLY
      }
    }, {
      timestamps: false
    }
  );
  services.associate = (models) => {
    services.belongsTo(models.Users);
    services.belongsTo(models.typeservices, {
      foreignKey: {
        name: "typeservicesId",
        field: "typeservicesId"
      }
    });
  };
  return services;
}