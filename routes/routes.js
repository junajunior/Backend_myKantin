const express = require("express");
const { login, authme,  } = require("../controller/loginController");
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
router.get('/data/users/"id' , userDetail )
router.delete("/data/users/delete/:id", userDelete ); 
router.put("/data/users/update/:id", userUpdate ); 

module.exports = router;













