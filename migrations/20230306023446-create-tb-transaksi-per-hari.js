'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_transaksiPerHaris', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idTransaksi: {
        type: Sequelize.INTEGER
      },
      pemasukan: {
        type: Sequelize.INTEGER
      },
      keterangan: {
        type: Sequelize.STRING
      },
      tanggalTransaksi: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('tb_transaksiPerHaris');
  }
};