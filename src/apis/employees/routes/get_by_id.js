import express from 'express';
import getEmployeeById from '../controllers/get_by_id';
import validateAuth from '../../../middlewares/validateAuth';

const router = express.Router();

router.get('/:id', validateAuth, getEmployeeById);
export default router;
