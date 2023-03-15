const express = require("express");
const { createBarang, ShowDataBarang, updateBarang, deleteBarang , createBarangMasuk, updateBarangMasuk, deleteBarangMasuk, showDataBarangMasuk, createPermintaanBarang, showDataPermintaanBarang, updatePermintaanBarang, deletePermintaanBarang} = require("../controller/barangController");
const { createHutang, showDataHutang, updateHutang, deleteHutang, showDataDetailHutang, createDetailHutang, showDataBayarHutang, createBayarHutang } = require("../controller/hutangController");
const { resetPassword, forgotPassword } = require("../controller/passwordController");
const { createTransaksiPerHari, showDataTransaksiPerHari, updateTransaksiPerHari, deleteTransaksiPerHari } = require("../controller/transaksiController");
const {login , userRegister, userShowData, userDetail, userDelete, userUpdate } = require("../controller/userController");
const { adminMiddleware } = require("../middleware/jwtMiddleware");
const router = express.Router();

router.get("/", (req, res) => {
   res.json({
     status: "Berhasil",
     message: "server berjalan dengan lancar",
   });
 }); 

router.post("/login" , login);

router.post('/reset-password' , resetPassword)
router.post('/forgot-password' , forgotPassword);

router.post("/create/users", userRegister );

router.post("/create/barang" , createBarang);

router.post("/create/barang-masuk" , createBarangMasuk);

router.post("/create/permintaan-barang" ,createPermintaanBarang );

router.post("/create/transaksi-harian" , createTransaksiPerHari);

router.post("/create/hutang" , createHutang);

router.post("/create/detail-hutang" , createDetailHutang);

router.post("/create/bayar-hutang" , createBayarHutang);



router.use(adminMiddleware);

router.get("/data/users", userShowData );
router.get('/data/users/:id' , userDetail )
router.delete("/data/users/delete/:id", userDelete ); 
router.put("/data/users/update/:id", userUpdate ); 

router.get("/data/barang" , ShowDataBarang);
router.put("/update/barang/:id" , updateBarang );
router.delete("/delete/barang/:id" , deleteBarang);

router.get("/data/barang-masuk" , showDataBarangMasuk);
router.put("/update/barang-masuk/:id" , updateBarangMasuk );
router.delete("/delete/barang-masuk/:id" , deleteBarangMasuk);

router.get("/data/permintaan-barang" , showDataPermintaanBarang);
router.put("/update/permintaan-barang/:id" ,  updatePermintaanBarang);
router.delete("/delete/permintaan-barang/:id" , deletePermintaanBarang);

router.get("/data/transaksi-harian" , showDataTransaksiPerHari);
router.put("/update/transaksi-harian/:id" , updateTransaksiPerHari );
router.delete("/delete/transaksi-harian/:id" , deleteTransaksiPerHari);

router.get("/data/hutang" , showDataHutang);
router.put("/update/hutang/:id" , updateHutang);
router.delete("/delete/hutang/:id" , deleteHutang);

router.get("/data/detail-hutang" , showDataDetailHutang);

router.get("/data/bayar-hutang" , showDataBayarHutang);




module.exports = router;













