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
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: "Users",
        required: true
    },
    attachments: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Attachments"
    }]
}, {
    timestamps: true
});

export default mongoose.model('Notes', Notes);