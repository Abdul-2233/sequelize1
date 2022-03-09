'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  const Cliente = sequelize.define('Cliente', {
    firstName: DataTypes.STRING,
    lastName:  DataTypes.STRING,
  }, {});

  Cliente.associate = function (models) {
    Cliente.hasMany(models.Venta, {
      foreignKey: 'clienteId'
    })
  };
 
  return Cliente;
};

module.exports = (sequelize, DataTypes) => {

  const Vehiculo = sequelize.define('Vehiculo', {
    modelo: DataTypes.STRING,
    anio: DataTypes.STRING,
    color: DataTypes.STRING
  }, {});

  Vehiculo.associate = function (models) {
    Vehiculo.hasMany(models.Venta, {
      foreignKey: 'vehiculoId'
    })
  };
 
  return Vehiculo;
};
