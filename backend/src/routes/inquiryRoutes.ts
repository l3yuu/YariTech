import express from 'express';
import { getInquiries, createInquiry, updateInquiryStatus } from '../controllers/inquiryController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(protect, getInquiries)
  .post(createInquiry);

router.route('/:id')
  .put(protect, updateInquiryStatus);

export default router;
