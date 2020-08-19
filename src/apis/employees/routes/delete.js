import express from 'express';
import deleteEmployee from '../controllers/delete';
import validateAuth from '../../../middlewares/validateAuth';

const router = express.Router();

router.delete('/:id', validateAuth, deleteEmployee);
export default router;
