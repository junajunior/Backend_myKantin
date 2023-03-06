const ModelBarang = require("../models").tb_barang;


const createBarang = async (req, res) => {
   try {
     let body = req.body;
     const barang = await ModelBarang.create(body);
     console.log(barang);
 
     res.status(201).json({
       status: "berhasil",
       msg: "create Produk Berhasil",
     });
   } catch (error) {
     console.log(error);
   }
 };

 
const ShowDataBarang = async (req, res) => {
   try {
     // const { keyword} = req.query
     const dataBarang = await ModelBarang.findAll({
       attributes: ["id", "kodeBarang", "namaBarang", "jenisBarang", "hargaBarang" , "idAdmin"],
     });
 
     return res.json({
       status: "Berhasil",
       msg: "Berikut Daftar barang",
       data: dataBarang,
     });
   } catch (error) {
     console.log(error);
     res.status(403).json({
       status: "Gagal",
       msg: "Ada Kesalahan di data barang",
     });
   }
 };

 module.exports = {createBarang , ShowDataBarang}