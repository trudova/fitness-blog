const router = require("express").Router();
const { json } = require("express");
const Category = require("../models/Category");
const Post = require("../models/Post");

router.post("/", async(req, res)=>{
    const newCat = new Category(req.body);
    try{
        await newCat.save();
        res.status(200).json(newCat);
    }catch(err){
        res.status(500),json(err)
    }
});

router.get("/", async(req, res)=>{
    try{
    const categories = await Category.find();
    res.status(200).json(categories);
    }catch(err){
        res.status(500),json(err)
    }
})



module.exports = router;