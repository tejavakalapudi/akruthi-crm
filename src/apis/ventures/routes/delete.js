import express from 'express';
import deleteVenture from '../controllers/delete';
import validateAuth from '../../../middlewares/validateAuth';

const router = express.Router();

router.delete('/:id', validateAuth, deleteVenture);
export default router;
