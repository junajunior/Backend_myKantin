'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_pembelians', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPembeli: {
        type: Sequelize.INTEGER,
        onDelete : "CASCADE",
        onUpdate : "CASCADE",
        references : {
          model : "users" ,
          key : "id" ,
          as : "id pembeli"
        }
      },
      namaPembeli: {
        type: Sequelize.STRING
      },
      Item: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_pembelians');
  }
};