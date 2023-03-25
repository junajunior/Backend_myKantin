const express = require("express");
const router = require("./routes/routes");
const app = express();
const cors = require("cors");
app.use(cors())
app.use(express.json())
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {console.log(`Server berjalan di port ${port}`)});

