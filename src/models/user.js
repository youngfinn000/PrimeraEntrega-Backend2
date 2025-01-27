import { Schema, model } from "mongoose";

const mongoose = require("mongoose");
const userSchema = new Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    age: {type: Number, required: true},
    password: {type: String, required: true , default: ''},
    cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
    role: {type: String, required: true, default: 'user'},
})

//Hash de contra
userSchema.pre('save', async (next)=> {
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

//comparar password
userSchema.methods.comparePassword = (password) =>{
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User" , userSchema);