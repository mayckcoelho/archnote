import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import HttpException from "../exceptions/HttpException"
import IUser from "../interfaces/IUser"
import Users from "../models/Users";

class UsersController {
    async listOne(req: Request, res: Response, next: NextFunction) {
        if (req.params.id == null) {
            res.status(400).json({ status: "error", message: "Um ID para busca deve ser informado!" });
        } else {
            await Users.findById(req.params.id, function (err: HttpException, userInfo: IUser) {
                if (err) {
                    next(err);
                } else {
                    if (userInfo)
                        res.status(200).json(userInfo);
                    else
                        res.status(400).json({ status: "error", message: "Usuário não encontrado!" })
                }
            });
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        await Users.findOne({
            email: req.body.email
        }, async function (err: HttpException, userInfo: IUser) {
            if (err) {
                next(err);
            } else if (userInfo != null) {
                res.status(400).json({ status: "error", message: "Um usuário com este email já esta cadastrado!" });
            } else {
                await Users.create(req.body, function (err: HttpException, userInfo: IUser) {
                    if (err)
                        next(err);
                    else
                        res.json(userInfo);
                });
            }
        });
    }

    async update(req: Request, res: Response, next: NextFunction) {
        await Users.findOne({
            email: req.body.email,
            _id: { $ne: req.params.id }
        }, async function (err, userInfo: IUser) {
            if (req.params.id == null) {
                res.status(400).json({ status: "error", message: "Um ID para alteração deve ser informado!" });
            } else {
                if (err) {
                    next(err);
                } else if (userInfo != null) {
                    res.status(400).json({ status: "error", message: "Um usuário com este email já esta cadastrado!" });
                } else {
                    Users.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, userInfo) {
                        if (err) {
                            next(err);
                        } else {
                            res.json(userInfo);
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
            await Users.findByIdAndRemove(req.params.id, function (err: HttpException) {
                if (err) {
                    next(err);
                } else {
                    res.json({ status: "success" });
                }
            });
        }
    }

    async authenticate(req: Request, res: Response, next: NextFunction) {
        await Users.findOne({
            email: req.body.email
        }, function (err: HttpException, userInfo: IUser) {
            if (err) {
                next(err);
            } else {
                if (userInfo != null && bcrypt.compareSync(req.body.password, userInfo.password)) {
                    const token = jwt.sign({ id: userInfo._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
                    res.json({ user: userInfo, token: token });
                } else {
                    res.status(404).json({ status: "error", message: "Email/Senha inválido!" });
                }
            }
        });
    }
}

export default new UsersController();