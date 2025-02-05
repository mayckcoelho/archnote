import multer from "multer";
import path from "path";
import crypto from "crypto";

import IFile from "../interfaces/IFile"

export default {
    dest: path.resolve(__dirname, '..', '..', 'tmp'),
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, path.resolve(__dirname, '..', '..', 'tmp'));
        },
        filename: (req, file: IFile, callback) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) callback(err, file.filename);

                file.key = `${hash.toString('hex')}-${file.originalname}`;

                callback(null, file.key);
            })
        }
    })
}