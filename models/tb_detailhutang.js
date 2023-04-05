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
      tb_detailHutang.belongsTo(models.tb_hutang, {
        as: "tb_hutang",
        foreignKey: "idHutang"
      })
    
    }
  }
  tb_detailHutang.init({
    tanggalHutang: DataTypes.DATE,
    idHutang: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'tb_detailHutang',
  });
  return tb_detailHutang;
};