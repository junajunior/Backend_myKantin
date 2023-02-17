'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_pengeluaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_pengeluaran.init({
    pengeluaranUang: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'tb_pengeluaran',
  });
  return tb_pengeluaran;
};