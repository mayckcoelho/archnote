import { Request, Response, NextFunction } from "express";

import HttpException from "../exceptions/HttpException"
import INote from "../interfaces/INote"
import Notes from "../models/Notes";

interface Filter {
    title: string | RegExpConstructor;
}

class NotesController {
    async list(req: Request, res: Response, next: NextFunction) {
        const limit = Number(req.query.limit) || 0
        const offset = Number(req.query.offset) || 0
        const title = req.query.title;

        let filter = {} as Filter
        if (req.query.title)
            filter.title = String(new RegExp(String(title), "i"));

        await Notes.find(filter)
            .skip(offset)
            .limit(limit)
            .exec(function (err: HttpException, noteInfo: INote) {
                if (err) {
                    next(err);
                } else {
                    Notes.countDocuments(filter, function (err: HttpException, count) {
                        res.set({
                            'X-Total-Count': count
                        })
                        res.status(200).json(noteInfo);
                    })
                }
            });
    }

    async listOne(req: Request, res: Response, next: NextFunction) {
        if (req.params.id == null) {
            res.status(400).json({ status: "error", message: "Um ID para busca deve ser informado!" });
        } else {
            const noteInfo = await Notes.findById(req.params.id).populate({
                path: "attachments",
                options: { sort: { createdAt: -1 } }
            })

            if (noteInfo)
                res.status(200).json(noteInfo);
            else
                res.status(400).json({ status: "error", message: "Nota não encontrada!" })
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        await Notes.findOne({
            title: req.body.title
        }, async function (err: HttpException, noteInfo) {
            if (err) {
                next(err);
            } else if (noteInfo != null) {
                res.status(400).json({ status: "error", message: "Uma nota com este título já está cadastrada!" });
            } else {
                await Notes.create(req.body, function (err: HttpException, noteInfo: INote) {
                    if (err)
                        next(err);
                    else
                        res.json(noteInfo);
                });
            }
        });
    }

    async update(req: Request, res: Response, next: NextFunction) {
        await Notes.findOne({
            title: req.body.title,
            _id: { $ne: req.params.id }
        }, async function (err: HttpException, noteInfo) {
            if (err) {
                next(err);
            } else if (noteInfo != null) {
                res.status(400).json({ status: "error", message: "Uma nota com este nome já está cadastrada!" });
            } else {
                if (req.params.id == null) {
                    res.status(400).json({ status: "error", message: "Um ID para alteração deve ser informado!" });
                } else {
                    Notes.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err: HttpException, noteInfo) {
                        if (err) {
                            next(err);
                        } else {
                            res.json(noteInfo);
                        }
                    });
                }
            }
        });
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        if (req.params.id == null) {
            res.status(400).json({ status: "error", message: "Um ID para exclusão deve ser informado!" });
        } else {
            await Notes.findByIdAndRemove(req.params.id, function (err) {
                if (err) {
                    next(err);
                } else {
                    res.json({ status: "success" });
                }
            });
        }
    }
}

export default new NotesController();