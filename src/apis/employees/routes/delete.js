import express from 'express';
import deleteEmployee from '../controllers/delete';
import verifyAuth from '../../../middlewares/authHelper';

const router = express.Router();

router.delete('/:id', verifyAuth, deleteEmployee);
export default router;
