import mongoose from "mongoose";

import IAttachment from "../interfaces/IAttachment"

const Attachments = new mongoose.Schema<IAttachment>({
    name: {
        type: String,
        trim: true,
        required: true
    },
    path: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

Attachments.virtual('url').get(function (this: { path: string }) {
    return `http://localhost:8082/attachments/${encodeURIComponent(this.path)}`;
})

export default mongoose.model('Attachments', Attachments);