const Regex = require("../model/RegexModel.js")


exports.CreateRegex= async(req, res, next)=>{
   
    const reg = await Regex.create(req.body);
    res.status(201).json({
        success:true,
        reg
    })
    
}

exports.ReadReg= async(req, res,next)=>{
    
    const Reg = await Regex.find();

    res.status(201).json({
        success:true,
        Reg
    })
}

exports.updateReg= async(req, res, next)=>{

    let reg = await Regex.findById(req.params.id);

    reg = await Regex.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
        message:"Expression updated successfully",
        reg,
      })

}


exports.deleteReg = async( req,res,next)=>{

    let reg = await Regex.findById(req.params.id);

    await reg.deleteOne();

    res.status(200).json({
        success:true,
        message:"Expression deleted successfully"
    })

}
