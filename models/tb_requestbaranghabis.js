'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_requestBarangHabis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tb_requestBarangHabis.belongsTo(models.user, { 
        as: "user", 
        foreignKey: "idAdmin" 
      })
    }
  }
  tb_requestBarangHabis.init({
    idPermintaan: DataTypes.INTEGER,
    kodeBarang: DataTypes.INTEGER,
    keterangan: DataTypes.STRING,
    tanggalPermintaan: DataTypes.DATE,
    idAdmin: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tb_requestBarangHabis',
  });
  return tb_requestBarangHabis;
};