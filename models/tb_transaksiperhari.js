'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_transaksiPerHari extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tb_transaksiPerHari.belongsTo(models.user, {
        as: "user",
        foreignKey: "idAdmin"
      })
    }
  }
  tb_transaksiPerHari.init({
    idTransaksi: DataTypes.INTEGER,
    pemasukan: DataTypes.INTEGER,
    keterangan: DataTypes.STRING,
    tanggalTransaksi: DataTypes.DATE,
    idAdmin: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tb_transaksiPerHari',
  });
  return tb_transaksiPerHari;
};