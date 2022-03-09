'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ventas', {
      id: {
        allowNull:     false,
        autoIncrement: true,
        primaryKey:    true,
        type: Sequelize.INTEGER
      },

      clienteId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Clientes',
          key:   'id',
          as:    'clienteId',
        }
      },

      vehiculoId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Vehiculos',
          key:   'id',
          as:    'vehiculoId',
        }
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ventas');
  }
};
