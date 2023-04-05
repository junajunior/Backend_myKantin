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
      tb_hutang.hasOne(models.tb_detailHutang, {
        as: "b_detailHutang",
        foreignKey: "idHutang"
      })
      tb_hutang.belongsTo(models.user, {
        as: "user",
        foreignKey: "idAdmin"
      })
    }
  }
  tb_hutang.init({
    namaPenghutang: DataTypes.STRING,
    jumlahHutang: DataTypes.INTEGER,
    idAdmin: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'tb_hutang',
  });
  return tb_hutang;
};