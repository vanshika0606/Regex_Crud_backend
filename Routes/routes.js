const express = require("express");

const {
    CreateRegex, ReadReg, updateReg, deleteReg 
} = require("../Controller/RegexController")

const router= express.Router();
 
router.route("/create").post(CreateRegex)
router.route("/read").get(ReadReg)
router.route("/update/:id").put(updateReg);
router.route("/delete/:id").delete(deleteReg);


module.exports= router