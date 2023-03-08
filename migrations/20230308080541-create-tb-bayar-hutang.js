'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_bayarHutangs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idBayar: {
        type: Sequelize.INTEGER
      },
      idHutang: {
        type: Sequelize.INTEGER
      },
      jumlahBayar: {
        type: Sequelize.INTEGER
      },
      tanggalBayar: {
        type: Sequelize.DATE
      },
      idAdmin: {
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
    await queryInterface.dropTable('tb_bayarHutangs');
  }
};