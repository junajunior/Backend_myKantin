const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

function adminMiddleware(req, res, next) {
  const authHeader = req.headers['authorization']; 
    // console.log(req.headers['authorization']); 
    const token = authHeader && authHeader.split(' ')[1]; 
    jwt.decode(req.headers.authorization.split(" ")[1]).email
    if (token == null) return res.status(401).json({ status: "gagal", message: "Token Tidak Ada" }); 
 
    jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err, decoded) =>{ 
        if (err) return res.status(401).json({ status: "gagal", message: "Token Salah" }); 
        req.email = decoded.email;
        req.idAdmin = decoded.nama;
        req.idAdmin = decoded.id; 
        req.idHutang = decoded.id; 
        next(); 
    })
}

module.exports = { adminMiddleware };