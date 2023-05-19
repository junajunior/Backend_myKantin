const ModelHutang = require("../models").tb_hutang;
const ModelDetailHutang = require("../models").tb_detailHutang;
const ModelBayarHutang = require("../models").tb_bayarHutang;
var jwt = require("jsonwebtoken");

const createHutang = async (req, res) => {
   try {
    const idAdmin = jwt.decode(req.headers.authorization.split(" ")[1]).id
    let body = req.body;
    body.idAdmin = idAdmin
    
     const dataHutang = await ModelHutang.create(body);
     console.log(dataHutang);
 
     res.status(201).json({
       status: "berhasil",
       msg: "Hutang Berhasil di create",
     });
   } catch (error) {
     console.log(error);
     res.status(422).json({
      status: "gagal",
      msg: "ada kesalahan di create Hutang",
    });
   }
 }
 const showDataHutang = async (req, res) => {
   try {
     // const { keyword} = req.query
     const dataHutang = await ModelHutang.findAll({
       attributes: ["id" , "namaPenghutang" , "jumlahHutang" , "idAdmin"],
       where: { 
        ...(key !== undefined && { 
          namaPenghutang: { 
            [Op.substring]: key, 
          }, 
          jumlahHutang: { 
            [Op.substring]: key, 
          }, 
        }), 
      },
     });
     return res.json({
       status: "Berhasil",
       msg: "Berikut Daftar Hutang",
       data: dataHutang,
     });
   } catch (error) {
     console.log(error);
     res.status(403).json({
       status: "Gagal",
       msg: "Ada Kesalahan di data daftar Hutang",
     });
   }
 }
 const updateHutang = async (req, res) => {
   try {
     const { id } = req.params;
     const { namaPenghutang , jumlahHutang  } = req.body;
     const dataDetail = await ModelHutang.findByPk(id);
     if (dataDetail === null) {
       return res.status(402).json({
         status: "Gagal",
         msg: "Data Hutang ini Tidak Ditemukan",
       });
     }
     await ModelHutang.update(
       { namaPenghutang: namaPenghutang , jumlahHutang : jumlahHutang },
       {
         where: {
           id: id,
         },
       }
     );
     return res.status(200).json({
       status: "Berhasil",
       msg: "Hutang Berhasil Diupdate",
     });
   } catch (error) {
     console.log(error);
     res.status(422).json({
       status: "Gagall",
       msg: "Ada Kesalahan di update Hutang",
     });
   }
 };
  const deleteHutang = async (req, res) => {
    try {
      const id = req.params.id;
      const dataDetailHutang = await ModelHutang.destroy({
        where: {
          id: id,
        },
      });
      if (dataDetailHutang === 0) {
        return res.json({
          status: "Gagal",
          msg: "Data Hutang Tidak Ditemukan",
        });
      }
      return res.json({
        status: "Berhasil",
        msg: "Hutang Berhasil Dihapus",
      });
    } catch (error) {
      console.log(error);
      res.status(403).json({
        status: "Fail",
        msg: "Ada Kesalahan di delete Hutang",
      });
    }
 };


 const createDetailHutang = async (req, res) => {
   try {
    const idHutang = jwt.decode(req.headers.authorization.split(" ")[1]).id
    let body = req.body;
    body.idHutang = idHutang
    
     const dataDetailHutang = await ModelDetailHutang.create(body);
     console.log(dataDetailHutang);
 
     res.status(201).json({
       status: "berhasil",
       msg: "Detail Hutang Berhasil di create",
     });
   } catch (error) {
     console.log(error);
     res.status(422).json({
      status: "gagal",
      msg: "ada kesalahan di create Detail Hutang",
    });
   }
 }
 const showDataDetailHutang = async (req, res) => {
   try {
     // const { keyword} = req.query
     const dataDetailHutang = await ModelDetailHutang.findAll({
       attributes: ["id" ,"tanggalHutang", "idHutang"],
       where: { 
        ...(key !== undefined && { 
          tanggalHutang: { 
            [Op.substring]: key, 
          }, 
        }), 
      },
     });
     return res.json({
       status: "Berhasil",
       msg: "Berikut Daftar Detail Hutang",
       data: dataDetailHutang,
     });
   } catch (error) {
     console.log(error);
     res.status(403).json({
       status: "Gagal",
       msg: "Ada Kesalahan di data daftar Detail Hutang",
     });
   }
 }
 const updateDetailHutang = async (req, res) => {
  try {
    const { id } = req.params;
    const {tanggalHutang} = req.body;
    const dataDetailHutang = await ModelDetailHutang.findByPk(id);
    if (dataDetailHutang === null) {
      return res.status(402).json({
        status: "Gagal",
        msg: "Data Detail Hutang ini Tidak Ditemukan",
      });
    }
    await ModelDetailHutang.update(
      {  tanggalHutang : tanggalHutang },
      {
        where: {
          id: id,
        },
      }
    );
    return res.status(200).json({
      status: "Berhasil",
      msg: "Detail Hutang Berhasil Diupdate",
    });
  } catch (error) {
    console.log(error);
    res.status(422).json({
      status: "Gagall",
      msg: "Ada Kesalahan di update Detail Hutang",
    });
  }
};
 const deleteDetailHutang = async (req, res) => {
   try {
     const id = req.params.id;
     const dataDetailHutang = await ModelDetailHutang.destroy({
       where: {
         id: id,
       },
     });
     if (dataDetailHutang === 0) {
       return res.json({
         status: "Gagal",
         msg: "Data Detail Hutang Tidak Ditemukan",
       });
     }
     return res.json({
       status: "Berhasil",
       msg: "Detail Hutang Berhasil Dihapus",
     });
   } catch (error) {
     console.log(error);
     res.status(403).json({
       status: "Fail",
       msg: "Ada Kesalahan di delete Detail Hutang",
     });
   }
};


 const createBayarHutang = async (req, res) => {
   try {
     let body = req.body;
     const dataDetailBayarHutang = await ModelBayarHutang.create(body);
     console.log(dataDetailBayarHutang);
 
     res.status(201).json({
       status: "berhasil",
       msg: "Detail bayar Hutang Berhasil di create",
     });
   } catch (error) {
     console.log(error);
     res.status(422).json({
      status: "gagal",
      msg: "ada kesalahan di create Detail bayar Hutang",
    });
   }
 }
 const showDataBayarHutang = async (req, res) => {
   try {
     // const { keyword} = req.query
     const dataDetailBayarHutang = await ModelBayarHutang.findAll({
       attributes: ["id" ,"idBayar" , "idHutang" , "jumlahBayar" ,"tanggalBayar", "idAdmin"],
       where: { 
        ...(key !== undefined && {  
          jumlahBayar: { 
            [Op.substring]: key, 
          }, 
          tanggalBayar: { 
            [Op.substring]: key, 
          },
        }), 
      },
     });
     return res.json({
       status: "Berhasil",
       msg: "Berikut Daftar Detail bayar Hutang",
       data: dataDetailBayarHutang,
     });
   } catch (error) {
     console.log(error);
     res.status(403).json({
       status: "Gagal",
       msg: "Ada Kesalahan di data daftar Detail bayar Hutang",
     });
   }
 }
 const updateBayarHutang = async (req, res) => {
  try {
    const { id } = req.params;
    const {  jumlahBayar ,tanggalBayar} = req.body;
    const dataBayarHutang = await ModelBayarHutang.findByPk(id);
    if (dataBayarHutang === null) {
      return res.status(402).json({
        status: "Gagal",
        msg: "Data Bayar Hutang ini Tidak Ditemukan",
      });
    }
    await ModelBayarHutang.update(
      { jumlahBayar : jumlahBayar , tanggalBayar : tanggalBayar},
      {
        where: {
          id: id,
        },
      }
    );
    return res.status(200).json({
      status: "Berhasil",
      msg: "Bayar Hutang Berhasil Diupdate",
    });
  } catch (error) {
    console.log(error);
    res.status(422).json({
      status: "Gagall",
      msg: "Ada Kesalahan di update Bayar Hutang",
    });
  }
};
 const deleteBayarHutang = async (req, res) => {
   try {
     const id = req.params.id;
     const dataBayarHutang = await ModelBayarHutang.destroy({
       where: {
         id: id,
       },
     });
     if (dataBayarHutang === 0) {
       return res.json({
         status: "Gagal",
         msg: "Data Bayar Hutang Tidak Ditemukan",
       });
     }
     return res.json({
       status: "Berhasil",
       msg: "Bayar Hutang Berhasil Dihapus",
     });
   } catch (error) {
     console.log(error);
     res.status(403).json({
       status: "Fail",
       msg: "Ada Kesalahan di delete Bayar Hutang",
     });
   }
};



module.exports = { createHutang , showDataHutang , updateHutang , deleteHutang , createDetailHutang , showDataDetailHutang , createBayarHutang , showDataBayarHutang , updateDetailHutang , deleteDetailHutang , updateBayarHutang , deleteBayarHutang}