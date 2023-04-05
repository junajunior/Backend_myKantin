'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_hutangs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jumlahHutang: {
        type: Sequelize.INTEGER
      },
      namaPenghutang: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('tb_hutangs');
  }
};