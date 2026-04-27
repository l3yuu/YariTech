import express from 'express';
import { loginUser, registerUser, getMe, updatePassword } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';
import { loginLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post('/login', loginLimiter, loginUser);

router.post('/register', registerUser);
router.get('/me', protect, getMe);
router.put('/updatepassword', protect, updatePassword);

export default router;
