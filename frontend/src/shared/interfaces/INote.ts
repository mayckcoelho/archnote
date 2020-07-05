import Attachment from "./IAttachment"

interface INote {
    _id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    attachments: Attachment[];
}

export default INote;