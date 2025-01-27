import express from 'express';
import passport from 'passport';
import {Router} from 'express';


const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = Router();

router.post('/login', async (req, res)=>{ //user login
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user || !user.comparePassword(password)){
            return res.status(401).json({message: 'invalid credentials'});
        }
        const token = jwt.sign({id:user._id}, 'SECRET_PASSWORD', {expiresIn: '1h'}); 
        res.cookie('jwt', token, {httpOnly: true});
        return res.json({message: 'success'});
    }catch(error){
        return res.status(500).json({message: 'server error'});
    }
});

router.get('/current', passport.authenticate('jwt', {session: false}), (req,res)=>{
    return res.json(req.user);
})

module.exports = router;