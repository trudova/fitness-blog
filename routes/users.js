const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require('bcrypt');

//UPDATE
router.put("/:id", async(req, res)=>{
 if(req.body.userId === req.params.id){
     if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
     }
       try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set: req.body
        } ,{new: true});
        const {password, ...rest} = updatedUser._doc
        res.status(200).json(rest);
    }catch(err){
        res.status(500).json(err)
    }
 }else{
    res.status(403).json("you can update only your account");
 }
});

// DELETE
router.delete("/:id", async(req, res)=>{
if(req.body.userId === req.params.id){
    try{
        const user = await User.findById(req.params.id);

    try{
        await Post.deleteMany({username: user.username});
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
        
    }catch(err){
        res.status(500).json(err)
    }
     }catch(err){
        res.status(404).json("User not found.")
    }
}else{
    res.status(403).json("you can delete only your account");
}
});
//GET USER 
router.get("/:id", async(req, res)=>{
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        const {password, ...rest} = user._doc;
        res.status(200).json(rest);

    }catch(err){
        res.status(500).json(err)
    }
});
router.get("/", async(req,res)=>{
    try{
    const users = await User.find({});
  const usersresp =  users.map(user =>{
       let { password, ...resUser} = user._doc;
       return resUser
    });
    res.status(200).json(usersresp);
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;


