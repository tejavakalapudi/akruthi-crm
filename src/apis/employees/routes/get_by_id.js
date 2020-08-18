import express from 'express';
import getEmployeeById from '../controllers/get_by_id';
import verifyAuth from '../../../middlewares/authHelper';

const router = express.Router();

router.get('/:id', verifyAuth, getEmployeeById);
export default router;
