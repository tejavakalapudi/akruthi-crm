import express from 'express';
import getEmployees from '../controllers/get_all';
import validateAuth from '../../../middlewares/validateAuth';
import validateAdmin from '../../../middlewares/validateAdmin';

const router = express.Router();

router.get('/', validateAuth, validateAdmin, getEmployees);

export default router;
