import { Document } from "mongoose";

interface IAttachment extends Document {
    title: string;
    path: string;
    content: string;
}

export default IAttachment;