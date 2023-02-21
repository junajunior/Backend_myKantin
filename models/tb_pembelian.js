'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_pembelian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tb_pembelian.belongsTo(models.user, {
        as : "id pembeli" ,
        foreignKey : "id"
      })
    }
  }
  tb_pembelian.init({
    idPembeli: DataTypes.INTEGER,
    namaPembeli: DataTypes.STRING,
    Item: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_pembelian',
  });
  return tb_pembelian;
};