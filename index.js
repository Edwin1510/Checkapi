const express = require("express");
const APPSERVER = express();
const BODYPARSER = require("body-parser")
APPSERVER.use(BODYPARSER.json())
const cors = require("cors")
APPSERVER.use(cors())
const dotenv = require("dotenv");
dotenv.config()


const hostname = "0.0.0.0"
const port = process.env.PORT

APPSERVER.use("/api", require("./Router"))

APPSERVER.listen(port, hostname, () => {

    console.log(`server running at http://${hostname}:${port}/ happily`)

})

