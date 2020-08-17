import express from 'express';
import getStatuses from '../controllers/get_all';
import verifyAuth from '../../../middlewares/authHelper';

const router = express.Router();

router.get('/', verifyAuth, getStatuses);

export default router;
