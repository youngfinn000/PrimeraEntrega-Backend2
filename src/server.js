import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import authRoutes from './routes/auth.js';
const passportConfig = require ('./config/passport.js');

const app = express();
const PORT = process.env.PORT || 8080;
//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
passportConfig(passport); //configura estrategias de passport

app.use(express.urlencoded({extended:true}));

app.all('/*', (req, res, next)=>{
    console.log(`[${new Date().toLocaleDateString()}] Request to: ${req.method} - ${req.originalUrl}`);
    next()
})

app.use('/auth', authRoutes);

app.listen(PORT, ()=>{
    console.log('server running on port 8080'); 
})