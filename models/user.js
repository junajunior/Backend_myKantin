'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasOne(models.tb_barang, {
        as: "tb_barang",
        foreignKey: "idAdmin"
      })
      user.hasOne(models.tb_barangMasuk, {
        as: "tb_barangMasuk",
        foreignKey: "idAdmin"
      })
      user.hasOne(models.tb_requestBarangHabis, {
        as: "tb_requestBarangHabis",
        foreignKey: "idAdmin"
      })
      user.hasOne(models.tb_transaksiPerHari, {
        as: "tb_transaksiPerHari",
        foreignKey: "idAdmin"
      })
    }
  }
  user.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    password_confirmation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};