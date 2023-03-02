const express= require("express")
const bodyParser= require("body-parser");
const cors= require("cors")

const app= express();

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


const Reg= require("./Routes/routes");

app.use("/",Reg);


module.exports= app;