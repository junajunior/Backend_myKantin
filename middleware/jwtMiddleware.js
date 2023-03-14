const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

function adminMiddleware(req, res, next) {
  const authHeader = req.headers['authorization']; 
    // console.log(req.headers['authorization']); 
    const token = authHeader && authHeader.split(' ')[1]; 
    if (token == null) return res.status(401).json({ status: "gagal", message: "Token Tidak Ada" }); 
 
    jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err, decoded) =>{ 
        if (err) return res.status(401).json({ status: "gagal", message: "Token Salah" }); 
        req.email = decoded.email;
        req.nama = decoded.nama; 
        next(); 
    })
}

module.exports = { adminMiddleware };