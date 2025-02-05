import mongoose from "mongoose";
import bcrypt from "bcrypt";

import IUser from "../interfaces/IUser"

const saltRounds = 10

const Users = new mongoose.Schema<IUser>({
    name: {
        type: String,
        trim: true,
        required: [true, 'Nome não informado!']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Email não informado!']
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Senha não informada!']
    }
}, {
    timestamps: true
});

// hash user password before saving into database
Users.pre<IUser>('save', function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

export default mongoose.model('Users', Users);