'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_hutang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_hutang.init({
    idHutang: DataTypes.INTEGER,
    jumlahHutang: DataTypes.INTEGER,
    namaPenghutang: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_hutang',
  });
  return tb_hutang;
};