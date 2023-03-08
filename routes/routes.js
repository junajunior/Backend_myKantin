const express = require("express");
const { createBarang, ShowDataBarang, updateBarang, deleteBarang , createBarangMasuk, updateBarangMasuk, deleteBarangMasuk, showDataBarangMasuk, createPermintaanBarang, showDataPermintaanBarang, updatePermintaanBarang, deletePermintaanBarang} = require("../controller/barangController");
const { login, authme,  } = require("../controller/loginController");
const { resetPassword, forgotPassword } = require("../controller/passwordController");
const { createTransaksiPerHari, showDataTransaksiPerHari, updateTransaksiPerHari, deleteTransaksiPerHari } = require("../controller/transaksiController");
const { userRegister, userShowData, userDetail, userDelete, userUpdate } = require("../controller/userController");
const { adminMiddleware } = require("../middleware/jwtMiddleware");
const router = express.Router();

router.get("/", (req, res) => {
   res.json({
     status: "Berhasil",
     message: "server berjalan dengan lancar",
   });
 }); 

router.post("/login" , login);
router.get("/authme", authme),
router.get("/adminMiddleware", adminMiddleware),

router.post("/create/users", userRegister );
router.get("/data/users", userShowData );
router.get('/data/users/:id' , userDetail )
router.delete("/data/users/delete/:id", userDelete ); 
router.put("/data/users/update/:id", userUpdate ); 

router.post('/reset-password' , resetPassword)
router.post('/forgot-password' , forgotPassword);

router.post("/create/barang" , createBarang);
router.get("/data/barang" , ShowDataBarang);
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

module.exports = router;













