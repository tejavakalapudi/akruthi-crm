import express from 'express';
import getVentureById from '../controllers/get_by_id';
import validateAuth from '../../../middlewares/validateAuth';

const router = express.Router();

router.get('/:id', validateAuth, getVentureById);
export default router;
