const express = require('express');
const User = require('../models/user.models');

const router = express.Router();
router.post("/store-user",async (req,res)=>{
    try{
        const {username,email,password} = req.body;
        const newUser = new User({username,email,password});
        await newUser.save();
        return res.status(201).json({message: 'User created successfully', user: newUser});
    }catch(err){
        console.error(err);
        return res.status(500).json({error: 'Internal server error'});
    }

})

router.get("/get-users",async (req,res)=>{
    try{
        const users = await User.find();
        return res.status(200).json({users});
    }catch(err){
        console.error(err);
        return res.status(500).json({error: 'Internal server error'});
    }
});

router.patch("/edit-user/:id",async (req,res)=>{
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        const {password} = req.body;
        user.password = password;
        await user.save();
        return res.status(200).json({message: 'User updated successfully', user});

    }catch(err){
        console.error(err);
        return res.status(500).json({error: 'Internal server error'});
    }
});

router.delete("/delete-user/:id",async (req,res)=>{
    try{
        const {id} = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        return res.status(200).json({message: 'User deleted successfully', user: deletedUser});

    }catch(err){
        console.error(err);
        return res.status(500).json({error: 'Internal server error'});
    }
});

module.exports = router;