import mongoose, { Document } from "mongoose";

interface IAttachment extends Document {
    title: string;
    content: string;
}

const Attachments = new mongoose.Schema<IAttachment>({
    name: {
        type: String,
        trim: true,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    note: {
        type: mongoose.Schema.Types.ObjectId, ref: "Notes"
    }
}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJson: { virtuals: true }
});

Attachments.virtual('url').get(function () {
    return `http://localhost:8082/files/${encodeURIComponent(this.path)}`;
})

export default mongoose.model('Attachments', Attachments);