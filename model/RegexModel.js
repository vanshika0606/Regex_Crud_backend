const mongoose= require("mongoose");

const RegexSchema = new mongoose.Schema({
    expression:{
        type:String
    }

})

module.exports = mongoose.model("Regex",RegexSchema);