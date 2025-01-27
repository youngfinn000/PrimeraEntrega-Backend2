const passport = require('passport');
const {Strategy: JWTstrategy, ExtractJWT} = require ('passport-jwt');
const User = require('../models/user');
import 'dotenv/config'; 

const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECTRET_KEY
};

const verifyToken = async (jwt_payload, done) =>{
    if(!jwt_payload) return done (null, false, {messages: 'invalid user'});
    return done (null, jwt_payload);
};

passport.use('jwt', new JWTstrategy(stategyConfig, verifyToken));

//
const cookieExtractor = (req) =>{
    return req.cookies.token;
};

const strategyCookiesConfig = {
    jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
    secretOrKey: process.env.SECTRET_KEY,
};

passport.use('jwtCookies', new JWTstrategy(strategyCookiesConfig, verifyToken));

//

passport.serializeUser((user, done) =>{
    try {
        done( null, user._id);

    }catch (error){
        throw new Error (error);
    }
});

passport.deserializeUser(async (id, done) =>{
    try{
        const user = await userService.getById(id) ;
        return done (null, user);
    }catch(error){
        done(error);
    }
});