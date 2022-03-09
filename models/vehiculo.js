'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Venta = sequelize.define('Venta', {
    //title:       DataTypes.STRING,
    //imageUrl:    DataTypes.STRING,
    //description: DataTypes.TEXT,
    vehiculoId:      DataTypes.INTEGER
  }, {});

  Venta.associate = function (models) {
    // associations can be defined here
    Venta.belongsTo(models.Vehiculo, {
      foreignKey: 'vehiculoId',
      onDelete: 'CASCADE'
    })
  };
  return Venta;
};
