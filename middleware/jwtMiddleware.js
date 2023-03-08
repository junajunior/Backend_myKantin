const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const ModelUser = require("../models").tb_user;

async function adminMiddleware(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json( 
      {
      status: "Gagal",
      msg: "Anda Tidak Terdaftar",
    });
  }

  const token = authorization.split(" ")[1];
  jwt.verify(token, process.env.JWT_ACCESS_TOKEN, async (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: "Gagal",
        msg: "Token Tidak Valid",
        data: err,
      });
    } else {
      const user = await ModelUser.findOne({
        where: {
          username: decoded?.username,
          role: decoded?.role,
        },
      });
      if (!user)
        return res.status(422).json({
          status: "Gagal",
          msg: "User Telah Dihapus",
        });
      console.log(decoded)
      req.id = decoded?.id;
      req.username = decoded?.username;
      req.role = decoded?.role;
      if (req.role === "admin") {
        next();
      } else {
        return res.status(422).json({
          status: "Gagal",
          msg: "ada kesalahan",
        });
      }
    }
  });
}

module.exports = { adminMiddleware };