import express from 'express';
import getLeadById from '../controllers/get_by_id';
import validateAuth from '../../../middlewares/validateAuth';

const router = express.Router();

router.get('/:id', validateAuth, getLeadById);
export default router;
