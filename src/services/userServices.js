const bcrypt = require('bcryptjs');

export const getUserByEmail= async (email)=>{
    try {
        return await useDao.getByEmail(email);
    }catch (error){
        throw new Error(error);
    }
};

export const getUserById= async (id)=>{
    try {
        return await useDao.getById(id);
    }catch (error){
        throw new Error(error);
    }    
};

export const register = async (user) => {
    try{
        const {email, password, isGithub} = user;
        const existUser = await getUserByEmail(email);
        if(existUser) throw new Error('User already exist')
        if (isGithub){
            const newUser = await userDao.register(user);
            return newUser;
        }const newUser = await userDao.register({
        ...user, password: createHash(password),
    });
    return newUser;

    }catch(error){
        throw new Error(error);}
}

export const login = async (email, password) => {
    try {
        const existUser = await getUserByEmail(email);
        if (!userExist) throw new Error('User not found');
        const validPassword = isValidPassword(password, userExist);
        if (!validPassword) throw new Error ('Incorrect credetials');
        return userExist;
    }catch (error){
        throw new Error (error);
    }
};

