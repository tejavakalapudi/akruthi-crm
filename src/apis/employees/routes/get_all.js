import express from 'express';
import getEmployees from '../controllers/get_all';
import verifyAuth from '../../../middlewares/authHelper';

const router = express.Router();

router.get('/', verifyAuth, getEmployees);

export default router;
