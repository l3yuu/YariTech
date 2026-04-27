import express from 'express';
import BlogPost from '../models/BlogPost.js';

// @desc    Get all blog posts
// @route   GET /api/blog
// @access  Public
export const getBlogPosts = async (req: express.Request, res: express.Response) => {
  try {
    const posts = await BlogPost.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get single blog post by slug
// @route   GET /api/blog/:slug
// @access  Public
export const getBlogPostBySlug = async (req: express.Request, res: express.Response) => {
  try {
    const post = await BlogPost.findOne({ slug: req.params.slug });
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create blog post
// @route   POST /api/blog
// @access  Private
export const createBlogPost = async (req: express.Request, res: express.Response) => {
  try {
    const post = await BlogPost.create(req.body);
    res.status(201).json(post);
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Slug already exists' });
    }
    res.status(400).json({ message: 'Invalid data' });
  }
};

// @desc    Update blog post
// @route   PUT /api/blog/:id
// @access  Private
export const updateBlogPost = async (req: express.Request, res: express.Response) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (post) {
      Object.assign(post, req.body);
      const updatedPost = await post.save();
      res.json(updatedPost);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete blog post
// @route   DELETE /api/blog/:id
// @access  Private
export const deleteBlogPost = async (req: express.Request, res: express.Response) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (post) {
      await post.deleteOne();
      res.json({ message: 'Post removed' });
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
