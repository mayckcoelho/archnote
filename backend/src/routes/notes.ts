import { Router } from "express";
import multer from "multer";

import multerConfig from "../config/multer";
import NotesController from "../controllers/NotesController";
import AttachmentsController from "../controllers/AttachmentsController";

const router = Router();

router.get('/', NotesController.list);
router.get('/:id', NotesController.listOne);
router.post('/', NotesController.create);
router.put('/:id', NotesController.update);
router.delete('/:id', NotesController.delete);

routes.post('/:id/attachments', multer(multerConfig).single('file'), AttachmentsController.store)

export default router;