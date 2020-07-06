import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import jwt, { VerifyCallback } from "jsonwebtoken";

dotenv.config();

import DecodedParams from "./interfaces/IDecodedParams"
import HttpException from "./exceptions/HttpException"

import users from "./routes/users";
import notes from "./routes/notes";

const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://<db-user>:<db-password>@<db-host>/<db-name>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/attachments', express.static(path.resolve(__dirname, '..', 'tmp')));

app.get('/', function (req: Request, res: Response) {
    res.json({ "Bem-vindo": "Esta é a Api do ArchNote" });
});

app.use(function (req: Request, res: Response, next: NextFunction) {
    req.url = req.url.replace(/[/]+/g, '/'); next();
});

// public route
app.use('/users', validateUser, users);
app.use('/notes', validateUser, notes);

const publicRoutes = [
    "/authenticate",
    "/register"
]

function validateUser(req: Request, res: Response, next: NextFunction) {
    if (publicRoutes.includes(req.url)) {
        next();
    } else {
        const token = req.headers['authorization']?.replace('Bearer ', '') as string;
        jwt.verify(token, process.env.JWT_SECRET as string, function (err, decoded: DecodedParams) {
            if (err) {
                res.status(401).json({ status: "error", message: err.message });
            } else {
                // add user id to requestss
                req.body.user = decoded.id;
                next();
            }
        } as VerifyCallback);
    }
}

// handle 404 error
app.use(function (req: Request, res: Response, next: NextFunction) {
    let err = new HttpException(404, 'Not Found');
    next(err);
});

// handle errors
app.use(function (err: HttpException, req: Request, res: Response) {
    if (err.status === 404)
        res.status(404).json({ status: "error", message: "Not found", url: req.url });
    else
        res.status(500).json({ status: "error", message: err.message });
});

const port = process.env.PORT || 8082

app.listen(port, function () { console.log(`[SERVER] Runing on port ${port}`); });