import { Router } from "express";

import UsersController from "../controllers/UsersController";

const router = Router();

router.get('/', UsersController.list);
router.get('/:id', UsersController.listOne);
router.post('/', UsersController.create);
router.put('/:id', UsersController.update);
router.delete('/:id', UsersController.delete);

router.post('/authenticate', UsersController.authenticate);

export default router;