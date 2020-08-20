import express from 'express';
import deleteLead from '../controllers/delete';
import validateAuth from '../../../middlewares/validateAuth';
// import validateAdmin from '../../../middlewares/validateAdmin';

const router = express.Router();

router.delete('/:id', validateAuth, deleteLead);
export default router;
