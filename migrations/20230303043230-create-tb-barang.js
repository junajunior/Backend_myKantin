'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_barangs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kodeBarang: {
        type: Sequelize.INTEGER
      },
      namaBarang: {
        type: Sequelize.STRING
      },
      jenisBarang: {
        type: Sequelize.STRING
      },
      hargaBarang: {
        type: Sequelize.INTEGER
      },
      idAdmin: {
        type: Sequelize.INTEGER,
        onDelete : "CASCADE",
        references : {
          model : "users",
          key : "id",
          as : "idAdmin"
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_barangs');
  }
};