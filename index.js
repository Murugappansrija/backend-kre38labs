const express = require("express")
const node_server = express();
require("dotenv").config()
const connectDb = require("./DB/DbConfig");
const  router  = require("./crudroute");


connectDb();
node_server.use(express.json())
node_server.use('/', router)


const port = process.env.PORT || 4000;

node_server.listen(port,()=>{
    console.log("Application is running on ", port);
})