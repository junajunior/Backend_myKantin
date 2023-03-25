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
      tb_barang.belongsTo(models.user, {
        as: "user",
        foreignKey: "idAdmin"
      })
    }
  }
  tb_barang.init({
    kodeBarang: DataTypes.INTEGER,
    namaBarang: DataTypes.STRING,
    jenisBarang: DataTypes.STRING,
    hargaBarang: DataTypes.INTEGER,
    idAdmin: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tb_barang',
  });
  return tb_barang;
};