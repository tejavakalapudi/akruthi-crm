import express from 'express';
import getStatuses from '../controllers/get_all';
import validateAuth from '../../../middlewares/validateAuth';

const router = express.Router();

router.get('/', validateAuth, getStatuses);

export default router;
