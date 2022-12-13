import express from 'express';
import { jwtAuth } from '../middlewares/jwtAuth.js';
import { TodoService } from '../services/todoService.js';
const router = express.Router();

// router.post('/test', jwtAuth, TodoService.create);
router.post('/', jwtAuth, TodoService.create);
router.get('/', jwtAuth, TodoService.read);
router.put('/:todoId',jwtAuth  , TodoService.update);
router.delete('/:todoId',jwtAuth, TodoService.delete);

export default router;


