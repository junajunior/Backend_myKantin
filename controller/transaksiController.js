const ModelTransaksiPerHari = require("../models").tb_transaksiPerHari;

const createTransaksiPerHari = async (req, res) => {
   try {
      let body = req.body;
      const dataTransaksiPerHari = await ModelTransaksiPerHari.create(body);
      console.log(dataTransaksiPerHari);
  
      res.status(201).json({
        status: "berhasil",
        msg: "Transaksi per hari berhasil dibuat",
      });
    } catch (error) {
      console.log(error);
      res.status(422).json({
       status: "gagal",
       msg: "ada kesalahan di Transaksi per hari",
     });
    }
}
const showDataTransaksiPerHari = async (req, res) => {
   try {
      const dataTransaksiPerHari = await ModelTransaksiPerHari.findAll({
        attributes: ["id" , "idTransaksi" ,"pemasukan" , "keterangan" , "tanggalTransaksi" , "idAdmin"]
      });
     
      return res.json({
        status: "Berhasil",
        msg: "Berikut Daftar Transaksi per hari",
        data: dataTransaksiPerHari,
      });
    } catch (error) {
      console.log(error);
      res.status(403).json({
        status: "Gagal",
        msg: "Ada Kesalahan di data daftar Transaksi per hari",
      });
    }
}
const updateTransaksiPerHari = async (req, res) => {
   try {
      const { id } = req.params;
      const { pemasukan } = req.body;
      const dataTransaksiPerHari = await ModelTransaksiPerHari.findByPk(id);
      if (dataTransaksiPerHari === null) {
        return res.status(402).json({
          status: "Gagal",
          msg: "Data Transaksi per hari ini Tidak Ditemukan",
        });
      }
      await ModelTransaksiPerHari.update(
        { pemasukan: pemasukan },
        {
          where: {
            id: id,
          },
        }
      );
      return res.status(200).json({
        status: "Berhasil",
        msg: "Transaksi per hari Berhasil Diupdate",
      });
    } catch (error) {
      console.log(error);
      res.status(422).json({
        status: "Gagall",
        msg: "Ada Kesalahan di update Transaksi per hari",
      });
    }
}
const deleteTransaksiPerHari = async (req, res) => {
   try {
      const id = req.params.id;
      const dataTransaksiPerHari = await ModelTransaksiPerHari.destroy({
        where: {
          id: id,
        },
      });
      if (dataTransaksiPerHari === 0) {
        return res.json({
          status: "Gagal",
          msg: "Transaksi per hari masuk Tidak Ditemukan",
        });
      }
      return res.json({
        status: "Berhasil",
        msg: "Transaksi per hari Berhasil Dihapus",
      });
    } catch (error) {
      console.log(error);
      res.status(403).json({
        status: "Fail",
        msg: "Ada Kesalahan di delete Transaksi per hari",
      });
    }
}

module.exports = {createTransaksiPerHari , showDataTransaksiPerHari , updateTransaksiPerHari , deleteTransaksiPerHari}