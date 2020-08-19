import express from 'express';
import getEmployeeById from '../controllers/get_by_id';
import validateAuth from '../../../middlewares/validateAuth';
import validateAdmin from '../../../middlewares/validateAdmin';

const router = express.Router();

router.get('/:id', validateAuth, validateAdmin, getEmployeeById);
export default router;
