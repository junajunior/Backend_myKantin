'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_pemasukan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_pemasukan.init({
    penghasilanUang: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'tb_pemasukan',
  });
  return tb_pemasukan;
};