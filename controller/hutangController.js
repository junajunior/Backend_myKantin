const ModelHutang = require("../models").tb_hutang;
const ModelDetailHutang = require("../models").tb_detailHutang;
const ModelBayarHutang = require("../models").tb_bayarHutang;

const createHutang = async (req, res) => {
   try {
     let body = req.body;
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
       attributes: ["idHutang" , "namaPenghutang" , "jumlahHutang"]
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
     const { namaPenghutang , jumlahHutang } = req.body;
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
     let body = req.body;
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
       attributes: ["idDetailHutang" , "idHutang" ,"tanggalHutang" ,"idAdmin"]
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
       attributes: ["idBayar" , "idHutang" , "jumlahBayar" ,"tanggalBayar", "idAdmin"]
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
 module.exports = { createHutang , showDataHutang , updateHutang , deleteHutang , createDetailHutang , showDataDetailHutang , createBayarHutang , showDataBayarHutang}