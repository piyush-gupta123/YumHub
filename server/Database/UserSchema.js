import mongoose from "mongoose";

const Schema = mongoose.Schema();

const userSchema = Schema({
    userName:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: Number,
    },
    address: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
})

export default new mongoose.model('User',userSchema);