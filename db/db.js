const mongoose = require("mongoose");


const connectDatabase = ()=>{


    mongoose.connect("mongodb://127.0.0.1:27017/REGEX_APP" , {useNewUrlParser:true}).then((data)=>{
    console.log(`Mongodb connect with server 4000`)
}).catch((err)=>{
    console.log(err)
})


}

module.exports = connectDatabase;