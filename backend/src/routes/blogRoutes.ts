import express from 'express';
import { 
  getBlogPosts, 
  getBlogPostBySlug, 
  createBlogPost, 
  updateBlogPost, 
  deleteBlogPost 
} from '../controllers/blogController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getBlogPosts)
  .post(protect, createBlogPost);

router.route('/:id')
  .put(protect, updateBlogPost)
  .delete(protect, deleteBlogPost);

router.get('/slug/:slug', getBlogPostBySlug);

export default router;
