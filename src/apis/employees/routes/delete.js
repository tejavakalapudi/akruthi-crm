import express from 'express';
import deleteEmployee from '../controllers/delete';
import validateAuth from '../../../middlewares/validateAuth';
import validateAdmin from '../../../middlewares/validateAdmin';

const router = express.Router();

router.delete('/:id', validateAuth, validateAdmin, deleteEmployee);
export default router;
