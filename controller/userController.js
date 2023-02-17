const ModelUser = require("../models").user;
const bcrypt = require("bcrypt");

const userRegister = async (req, res) => {
  try {
    let body = req.body;

    if(body.password_confirmation !== body.password) {
      return res.status(201).json({
        status: "gagal",
        msg: "password anda tidak sama"
      });
    }

    body.password = await bcrypt.hashSync(body.password, 10);
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
      msg: "ada kesalahan di register",
    });
  }
};

const userShowData = async (req, res) => {
  try {
    const dataUser = await ModelUser.findAll({
      attributes: ["id" , "email" , "nama", ]
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
    // const { id } = req.params;
    const dataDetail = await ModelUser.findByPk(id);
    if (dataDetail === null) {
      return res.json({
        status: "Gagal",
        msg: "Data user ini tidak ditemukan",
      });
    }
    return res.json({
      status: "Berhasil",
      msg: "Berikut ini adalah data detail dari user ini",
      data: dataDetail,
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
      return res.json({
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
      return res.json({
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
    return res.json({
      status: "Berhasil",
      msg: "User Berhasil Diupdate",
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Gagall",
      msg: "Ada Kesalahan di update user",
    });
  }
};

module.exports = { userDelete, userDetail, userRegister, userUpdate, userShowData };


