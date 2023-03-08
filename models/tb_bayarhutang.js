'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_bayarHutang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_bayarHutang.init({
    idBayar: DataTypes.INTEGER,
    idHutang: DataTypes.INTEGER,
    jumlahBayar: DataTypes.INTEGER,
    tanggalBayar: DataTypes.DATE,
    idAdmin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_bayarHutang',
  });
  return tb_bayarHutang;
};