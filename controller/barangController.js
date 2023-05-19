const ModelBarang = require("../models").tb_barang;
const ModelBarangMasuk = require("../models").tb_barangMasuk;
const ModelRequestBarangHabis = require("../models").tb_requestBarangHabis;
var jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

const createBarang = async (req, res) => {
  // if(role != admin) {
  //   res.json({
  //     status: "gagal",
  //     msg: "anda bukan admin",
  //   });
  // }
  try {
    const idAdmin = jwt.decode(req.headers.authorization.split(" ")[1]).id
    let body = req.body;
    body.idAdmin = idAdmin
    
    const dataBarang = await ModelBarang.create(body);
    console.log(dataBarang);

    res.status(201).json({
      status: "berhasil",
      msg: "Barang Berhasil di create",
    });
  } catch (error) {
    console.log(error);
    res.status(422).json({
      status: "gagal",
      msg: "ada kesalahan di create Barang",
    });
  }
};
const ShowDataBarang = async (req, res) => {
  try {
    // const { keyword} = req.query
    const { key } = req.query; 
    const dataBarang = await ModelBarang.findAll({
      attributes: ["id", "kodeBarang", "namaBarang", "jenisBarang", "hargaBarang", "idAdmin"],
      where: { 
        ...(key !== undefined && { 
          namaBarang: { 
            [Op.substring]: key, 
          }, 
          jenisBarang: { 
            [Op.substring]: key, 
          }, 
          hargaBarang: { 
            [Op.substring]: key, 
          }, 
          kodeBarang: { 
            [Op.substring]: key, 
          }, 
        }), 
      },
      // include:[{model:ModelUser}],
      // as : "users"
    });
    //  if (dataBarang === null) {
    //   console.log(dataBarang);
    //   return res.status(422).json({
    //     status: "Gagal",
    //     msg: "belum ada daftar barang , silahkan create barang terlebih dahulu",
    //   });
    // }
    return res.json({
      status: "Berhasil",
      msg: "Berikut Daftar barang",
      data: dataBarang,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Gagal",
      msg: "Ada Kesalahan di data daftar barang",
    });
  }
};
const ShowDataDetailBarang = async (req, res) => {
  try {
    const { id } = req.params;
    const dataDetailBarang = await ModelBarang.findByPk(id);
    
    if (dataDetailBarang === null) {
      return res.status(402).json({
        status: "Gagal",
        msg: "Data barang ini tidak ditemukan",
      });
    }
    return res.json({
      status: "Berhasil",
      msg: "Berikut ini adalah data detail dari barang ini",
      data: dataDetailBarang,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Fail",
      msg: "ada kesalahan di detail barang",
    });
  }
}
const updateBarang = async (req, res) => {
  try {
    const { id } = req.params;
    const { namaBarang , jenisBarang, hargaBarang,} = req.body;
    const dataDetail = await ModelBarang.findByPk(id);
    if (dataDetail === null) {
      return res.status(402).json({
        status: "Gagal",
        msg: "Data barang ini Tidak Ditemukan",
      });
    }
    await ModelBarang.update(
      { namaBarang: namaBarang , jenisBarang : jenisBarang ,hargaBarang : hargaBarang},
      {
        where: {
          id: id,
        },
      }
    );
    return res.status(200).json({
      status: "Berhasil",
      msg: "barang Berhasil Diupdate",
    });
  } catch (error) {
    console.log(error);
    res.status(422).json({
      status: "Gagall",
      msg: "Ada Kesalahan di update barang",
    });
  }
};
const deleteBarang = async (req, res) => {
  try {
    const id = req.params.id;
    const dataDetail = await ModelBarang.destroy({
      where: {
        id: id,
      },
    });
    if (dataDetail === 0) {
      return res.json({
        status: "Gagal",
        msg: "Data Barang Tidak Ditemukan",
      });
    }
    return res.json({
      status: "Berhasil",
      msg: "Barang Berhasil Dihapus",
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Fail",
      msg: "Ada Kesalahan di delete barang",
    });
  }
};

const createBarangMasuk = async (req, res) => {
  try {
    const idAdmin = jwt.decode(req.headers.authorization.split(" ")[1]).id
    let body = req.body;
    body.idAdmin = idAdmin
    const dataBarangMasuk = await ModelBarangMasuk.create(body);
    console.log(dataBarangMasuk);

    res.status(201).json({
      status: "berhasil",
      msg: "Barang masuk Berhasil di input",
    });
  } catch (error) {
    console.log(error);
    res.status(422).json({
      status: "gagal",
      msg: "ada kesalahan di input Barang masuk",
    });
  }
}
const showDataBarangMasuk = async (req, res) => {
  try {
    const dataBarangMasuk = await ModelBarangMasuk.findAll({
      attributes: ["id", "idBarangMasuk", "kodeBarang", "satuanBarang", "expiredBarang", "tanggalMasuk", "keterangan", "idAdmin"],
      where: { 
        ...(key !== undefined && { 
          kodeBarang: { 
            [Op.substring]: key, 
          }, 
          satuanBarang: { 
            [Op.substring]: key, 
          }, 
        }), 
      },
    });
    return res.json({
      status: "Berhasil",
      msg: "Berikut Daftar barang yang masuk",
      data: dataBarangMasuk,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Gagal",
      msg: "Ada Kesalahan di data daftar barang masuk",
    });
  }
}
const updateBarangMasuk = async (req, res) => {
  try {
    const { id } = req.params;
    const { keterangan , satuanBarang, expiredBarang, tanggalMasuk,} = req.body;
    const dataBarangMasuk = await ModelBarangMasuk.findByPk(id);
    if (dataBarangMasuk === null) {
      return res.status(402).json({
        status: "Gagal",
        msg: "Data barang masuk ini Tidak Ditemukan",
      });
    }
    await ModelBarangMasuk.update(
      { keterangan: keterangan , satuanBarang : satuanBarang ,expiredBarang : expiredBarang ,tanggalMasuk :tanggalMasuk },
      {
        where: {
          id: id,
        },
      }
    );
    return res.status(200).json({
      status: "Berhasil",
      msg: "barang masuk Berhasil Diupdate",
    });
  } catch (error) {
    console.log(error);
    res.status(422).json({
      status: "Gagall",
      msg: "Ada Kesalahan di update barang masuk",
    });
  }
}
const deleteBarangMasuk = async (req, res) => {
  try {
    const id = req.params.id;
    const dataBarangMasuk = await ModelBarangMasuk.destroy({
      where: {
        id: id,
      },
    });
    if (dataBarangMasuk === 0) {
      return res.json({
        status: "Gagal",
        msg: "Data Barang masuk Tidak Ditemukan",
      });
    }
    return res.json({
      status: "Berhasil",
      msg: "Barang masuk Berhasil Dihapus",
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Fail",
      msg: "Ada Kesalahan di delete barang masuk",
    });
  }
}

const createPermintaanBarang = async (req, res) => {
  try {
    const idAdmin = jwt.decode(req.headers.authorization.split(" ")[1]).id
    let body = req.body;
    body.idAdmin = idAdmin
    
    const dataRequestBarangHabis = await ModelRequestBarangHabis.create(body);
    console.log(dataRequestBarangHabis);

    res.status(201).json({
      status: "berhasil",
      msg: "permintaan barang Berhasil di create",
    });
  } catch (error) {
    console.log(error);
    res.status(422).json({
      status: "gagal",
      msg: "ada kesalahan di create permintaan Barang",
    });
  }
}
const showDataPermintaanBarang = async (req, res) => {
  try {
    // const { keyword} = req.query
    const dataRequestBarangHabis = await ModelRequestBarangHabis.findAll({
      attributes: ["id", "idPermintaan", "kodeBarang", "keterangan", "tanggalPermintaan", "idAdmin"],
      where: { 
        ...(key !== undefined && { 
          kodeBarang: { 
            [Op.substring]: key, 
          }, 
          keterangan: { 
            [Op.substring]: key, 
          }, 
        }), 
      },
    });
    return res.json({
      status: "Berhasil",
      msg: "Berikut Daftar permintaan barang",
      data: dataRequestBarangHabis,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Gagal",
      msg: "Ada Kesalahan di data daftar permintaan Barang",
    });
  }
}
const updatePermintaanBarang = async (req, res) => {
  try {
    const { id } = req.params;
    const { keterangan , tanggalPermintaan } = req.body;
    const dataRequestBarangHabis = await ModelRequestBarangHabis.findByPk(id);
    if (dataRequestBarangHabis === null) {
      return res.status(402).json({
        status: "Gagal",
        msg: "Data permintaan barang ini Tidak Ditemukan",
      });
    }
    await ModelRequestBarangHabis.update(
      { keterangan: keterangan , tanggalPermintaan : tanggalPermintaan },
      {
        where: {
          id: id,
        },
      }
    );
    return res.status(200).json({
      status: "Berhasil",
      msg: "permintaan barang Berhasil Diupdate",
    });
  } catch (error) {
    console.log(error);
    res.status(422).json({
      status: "Gagal",
      msg: "Ada Kesalahan di update permintaan barang",
    });
  }
}
const deletePermintaanBarang = async (req, res) => {
  try {
    const id = req.params.id;
    const dataRequestBarangHabis = await ModelRequestBarangHabis.destroy({
      where: {
        id: id,
      },
    });
    if (dataRequestBarangHabis === 0) {
      return res.json({
        status: "Gagal",
        msg: "Data permintaan Barang Tidak Ditemukan",
      });
    }
    return res.json({
      status: "Berhasil",
      msg: "permintaan Barang Berhasil Dihapus",
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Fail",
      msg: "Ada Kesalahan di delete permintaan barang",
    });
  }
}


module.exports = { createBarang, ShowDataBarang, ShowDataDetailBarang, updateBarang, deleteBarang, createBarangMasuk, showDataBarangMasuk, updateBarangMasuk, deleteBarangMasuk, createPermintaanBarang, showDataPermintaanBarang, updatePermintaanBarang, deletePermintaanBarang }