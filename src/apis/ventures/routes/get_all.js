import express from 'express';
import getStatuses from '../controllers/get_all';

const router = express.Router();

router.get('/', getStatuses);

export default router;
