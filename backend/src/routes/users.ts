import { Router } from "express";

import UsersController from "../controllers/UsersController";

const router = Router();

router.get('/:id', UsersController.listOne);
router.put('/:id', UsersController.update);
router.delete('/:id', UsersController.delete);

router.post('/register', UsersController.create);
router.post('/authenticate', UsersController.authenticate);

export default router;