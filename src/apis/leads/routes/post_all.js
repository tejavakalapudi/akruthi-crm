import express from 'express';
import bulkUploadLeads from '../controllers/post_all';
import validateAuth from '../../../middlewares/validateAuth';
import multerUpload from '../../../config/multer';

const router = express.Router();

router.post('/bulk-upload', validateAuth, multerUpload.single('file'), bulkUploadLeads);
export default router;
