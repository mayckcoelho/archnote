import { Document } from "mongoose";

interface INote extends Document {
    title: string;
    content: string;
}

export default INote;