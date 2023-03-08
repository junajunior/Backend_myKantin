'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_barangMasuks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idBarangMasuk: { 
        
        type: Sequelize.INTEGER
      },
      kodeBarang: {
        type: Sequelize.INTEGER
      },
      satuanBarang: {
        type: Sequelize.INTEGER
      },
      expiredBarang: {
        type: Sequelize.STRING
      },
      tanggalMasuk: {
        type: Sequelize.DATE
      },
      keterangan: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('tb_barangMasuks');
  }
};