const ModelUser = require("../models").user;
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
var jwt = require("jsonwebtoken");
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
        email: dataUser.email,
        id: dataUser.id,
      },
      process.env.JWT_ACCESS_TOKEN,
      {
        expiresIn: "1d",
      }
    );
    return res.json({
      status: "Berhasil",
      msg: "Selamat anda berhasil login",
      user: dataUser,
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
const userRegister = async (req, res) => {
  try {

    let body = req.body;
    if(body.password_confirmation !== body.password) {
      return res.status(402).json({
        status: "gagal",
        msg: "password anda tidak sama"
      });
    }

    body.password = await bcrypt.hashSync(body.password, 10);
    body.password_confirmation = await bcrypt.hashSync(body.password_confirmation, 10);
    const users = await ModelUser.create(body);
    console.log(users);

    res.status(201).json({
      status: "Sucess",
      msg: "Selamat register anda berhasil",
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Fail",
      msg: "ada kesalahan di register , silahkan coba lagi",
    });
  }
};
const userShowData = async (req, res) => {
  try {
    const dataUser = await ModelUser.findAll({
      attributes: ["id" , "email" , "nama",]
    });
    return res.json({
      status: "Berhasil",
      msg: "berikut ini adalah daftar users myKantin",
      data: dataUser,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Fail",
      msg: "ada kesalahan di daftar user",
    });
  }
};
const userDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const dataDetailUser = await ModelUser.findByPk(id);
    if (dataDetailUser === null) {
      return res.status(402).json({
        status: "Gagal",
        msg: "Data user ini tidak ditemukan",
      });
    }
    return res.json({
      status: "Berhasil",
      msg: "Berikut ini adalah data detail dari user ini",
      data: dataDetailUser,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Fail",
      msg: "ada kesalahan di detail user",
    });
  }
};
const userDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const dataDetail = await ModelUser.destroy({
      where: {
        id: id,
      },
    });
    if (dataDetail === 0) {
      return res.status(402).json({
        status: "Fail",
        msg: "Data User Tidak Ditemukan",
      });
    }
    return res.json({
      status: "Berhasil",
      msg: "User telah Dihapus",
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Fail",
      msg: "Ada Kesalahan di delete user",
    });
  }
};
const userUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama , email } = req.body;
    const dataDetail = await ModelUser.findByPk(id);

    if (dataDetail === null) {
      return res.status(402).json({
        status: "Gagal",
        msg: "Data User Tidak Ditemukan",
      });
    }
    await ModelUser.update(
      { nama: nama, email: email },
      {
        where: {
          id: id,
        },
      }
    );
    return res.status(200).json({
      status: "Berhasil",
      msg: "User Berhasil Diupdate",
    });
  } catch (error) {
    console.log(error);
    res.status(422).json({
      status: "Gagall",
      msg: "Ada Kesalahan di update user",
    });
  }
};

module.exports = { userDelete, userDetail, userRegister, userUpdate, userShowData , login };


