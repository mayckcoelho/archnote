import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import Notes from "../models/Notes";

import IFile from "../interfaces/IFile"
import IAttachment from "../interfaces/IAttachment"
import INote from "../interfaces/INote"
import Attachments from "../models/Attachments";

class AttachmentsController {

    async create(req: Request, res: Response, next: NextFunction) {
        const note = await Notes.findById(req.params.id).populate({
            path: "attachments",
            options: { sort: { createdAt: -1 } }
        }) as INote | null

        const file = req.file as IFile

        if (note) {
            const attachment = await Attachments.create({
                name: file.originalname,
                path: file.key,
            }) as IAttachment

            note.attachments.push(attachment)
            await note.save();

            res.json(attachment)
        } else {
            res.status(404).json({ status: "error", message: "Nota não encontrada!" });
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        const note = await Notes.findById(req.params.id).populate({
            path: "attachments",
            options: { sort: { createdAt: -1 } }
        }) as INote | null

        if (note) {
            const attachment = note.attachments.find(attachment => attachment.id === req.params.idAttachment);

            const filePath = attachment?.path;

            note.attachments = note.attachments.filter(attachment => attachment.id !== req.params.idAttachment);
            await note.save();

            await Attachments.findByIdAndRemove(req.params.idAttachment, function (err) {
                if (err) {
                    next(err);
                } else {
                    if (filePath) {
                        fs.unlink(path.resolve(__dirname, '..', '..', 'tmp', filePath), (err) => { })
                    }

                    res.json({ status: "success" });
                }
            });
        } else {
            res.status(404).json({ status: "error", message: "Nota não encontrada!" });
        }
    }
}

export default new AttachmentsController();