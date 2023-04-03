const express = require("express");
const { createBarang, ShowDataBarang, updateBarang, deleteBarang , createBarangMasuk, updateBarangMasuk, deleteBarangMasuk, showDataBarangMasuk, createPermintaanBarang, showDataPermintaanBarang, updatePermintaanBarang, deletePermintaanBarang, ShowDataDetailBarang} = require("../controller/barangController");
const { createHutang, showDataHutang, updateHutang, deleteHutang, showDataDetailHutang, createDetailHutang, showDataBayarHutang, createBayarHutang, updateDetailHutang, deleteDetailHutang, updateBayarHutang, deleteBayarHutang } = require("../controller/hutangController");
const {   } = require("../controller/passwordController");
const { createTransaksiPerHari, showDataTransaksiPerHari, updateTransaksiPerHari, deleteTransaksiPerHari } = require("../controller/transaksiController");
const {login , userRegister, userShowData, userDetail, userDelete, userUpdate } = require("../controller/userController");
const { adminMiddleware } = require("../middleware/jwtMiddleware");
const router = express.Router();

router.get("/", (req, res) => {
   res.json({
     status: "Berhasil",
     message: "alhamdulillah server backend myKantin berjalan dengan lancar",
   });
 }); 

router.post("/login" , login);
router.post("/create/users", userRegister );

// router.post('/reset-password' , resetPassword)
// router.post('/forgot-password' , forgotPassword);

router.use(adminMiddleware);

router.get("/data/users", userShowData );
router.get('/data/users/:id' , userDetail );
router.delete("/data/users/delete/:id", userDelete ); 
router.put("/data/users/update/:id", userUpdate ); 

router.post("/create/barang", createBarang);
router.get("/data/barang" , ShowDataBarang);
router.get("/data/barang/:id" , ShowDataDetailBarang);
router.put("/update/barang/:id" , updateBarang );
router.delete("/delete/barang/:id" , deleteBarang);

router.post("/create/barang-masuk" , createBarangMasuk);
router.get("/data/barang-masuk" , showDataBarangMasuk);
router.put("/update/barang-masuk/:id" , updateBarangMasuk );
router.delete("/delete/barang-masuk/:id" , deleteBarangMasuk);


router.post("/create/permintaan-barang" ,createPermintaanBarang );
router.get("/data/permintaan-barang" , showDataPermintaanBarang);
router.put("/update/permintaan-barang/:id" ,  updatePermintaanBarang);
router.delete("/delete/permintaan-barang/:id" , deletePermintaanBarang);

router.post("/create/transaksi-harian" , createTransaksiPerHari);
router.get("/data/transaksi-harian" , showDataTransaksiPerHari);
router.put("/update/transaksi-harian/:id" , updateTransaksiPerHari );
router.delete("/delete/transaksi-harian/:id" , deleteTransaksiPerHari);

router.post("/create/hutang" , createHutang);
router.get("/data/hutang" , showDataHutang);
router.put("/update/hutang/:id" , updateHutang);
router.delete("/delete/hutang/:id" , deleteHutang);

router.post("/create/detail-hutang" , createDetailHutang);
router.get("/data/detail-hutang" , showDataDetailHutang);
router.put("/update/detail-hutang/:id" , updateDetailHutang);
router.delete("/delete/detail-hutang/:id" , deleteDetailHutang);

router.post("/create/bayar-hutang" , createBayarHutang);
router.get("/data/bayar-hutang" , showDataBayarHutang);
router.put("/update/bayar-hutang/:id" , updateBayarHutang);
router.delete("/delete/bayar-hutang/:id" , deleteBayarHutang);



module.exports = router;













