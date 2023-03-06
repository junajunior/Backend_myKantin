const ModelUser = require("../models").user;
const dotenv = require("dotenv");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
dotenv.config();

const login = async (req, res) => {
  try {
    const { nama } = req.body;
    const dataUser = await ModelUser.findOne({
      where: {
        nama: nama,
      },
    });
    if (dataUser === null) {
      return res.status(422).json({
        status: "Gagal",
        msg: "anda belum register, silahkan register terlebih dahulu",
      });
    }
    const check = bcrypt.compareSync(req.body.password, dataUser.password)
    if (!check) {
      return res.json({
        status: "Gagal",
        msg: "maaf password anda salah",
      })
    }

    const token = jwt.sign(
      {
        nama: dataUser.nama,
        email: dataUser.email
      },
      process.env.JWT_ACCESS_TOKEN,
      {
        expiresIn: "1d",
      }
    );
    return res.json({
      status: "Berhasil",
      msg: "Selamat anda berhasil login",
      token: token,
    });
  } catch (error) {
    console.log(error)
    return res.json({
      status: "Fail",
      msg: "ada kesalahan di login anda",
    })
  }
};

const authme = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const he = authorization.split(" ")[1];
    jwt.verify(he, process.env.JWT_ACCESS_TOKEN, async (err) => {
      if (err) {
        return res.status(401).json({
          status: "Gagal",
          msg: "Token Tidak Valid",
          data: err,
        });
      } else {
        return res.send({
          status: "Berhasil",
          messege: "Berhasil Membuat Autentikasi Baru",
          token: token,
          user: {
            id: req.id,
            nama: req.nama,
            role: req.role,
          },
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "gagal",
      msg: "ada kesalahan"
    })
  }
};


module.exports = { login , authme };




