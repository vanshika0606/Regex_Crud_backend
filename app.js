const express= require("express")
const bodyParser= require("body-parser");
const dotenv = require("dotenv")
const cors= require("cors")

const app= express();

dotenv.config({ path: './env/config.env'})

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


const Reg= require("./Routes/routes");

app.use("/",Reg);


module.exports= app;