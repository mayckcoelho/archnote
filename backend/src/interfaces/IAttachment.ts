import { Document } from "mongoose";

interface IAttachment extends Document {
    id: string;
    name: string;
    path: string;
    url: string;
}

export default IAttachment;