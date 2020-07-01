import mongoose from "mongoose";

import INote from "../interfaces/INote"

const Notes = new mongoose.Schema<INote>({
    title: {
        type: String,
        trim: true,
        required: [true, 'Título não informado!']
    },
    content: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: "Users"
    }
}, {
    timestamps: true
});

export default mongoose.model('Notes', Notes);