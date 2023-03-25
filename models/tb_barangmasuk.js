'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_barangMasuk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tb_barangMasuk.belongsTo(models.user, { 
        as: "user", 
        foreignKey: "idAdmin" 
      })
    }
  }
  tb_barangMasuk.init({
    idBarangMasuk: DataTypes.INTEGER,
    kodeBarang: DataTypes.INTEGER,
    satuanBarang: DataTypes.INTEGER,
    expiredBarang: DataTypes.DATE,
    tanggalMasuk: DataTypes.DATE,
    keterangan: DataTypes.STRING,
    idAdmin: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tb_barangMasuk',
  });
  return tb_barangMasuk;
};