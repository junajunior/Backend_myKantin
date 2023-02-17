'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_barang.init({
    namaBarang: DataTypes.STRING,
    stockBarang: DataTypes.INTEGER,
    hargaBarang: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'tb_barang',
  });
  return tb_barang;
};