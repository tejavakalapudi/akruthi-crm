import express from 'express';
import getAllLeads from '../controllers/get_all';
import validateAuth from '../../../middlewares/validateAuth';

const router = express.Router();
router.get('/', validateAuth, getAllLeads);
export default router;
