'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_detailHutang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_detailHutang.init({
    idDetailHutang: DataTypes.INTEGER,
    idHutang: DataTypes.INTEGER,
    tanggalHutang: DataTypes.DATE,
    idAdmin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_detailHutang',
  });
  return tb_detailHutang;
};