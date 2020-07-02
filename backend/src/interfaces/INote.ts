import { Document } from "mongoose";
import IAttachment from "./IAttachment"

interface INote extends Document {
    title: string;
    content: string;
    attachments: IAttachment[];
}

export default INote;