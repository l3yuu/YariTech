import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title']
  },
  slug: {
    type: String,
    required: [true, 'Please add a slug'],
    unique: true
  },
  excerpt: {
    type: String,
    required: [true, 'Please add an excerpt']
  },
  content: {
    type: String,
    required: [true, 'Please add content']
  },
  author: {
    type: String,
    required: [true, 'Please add an author']
  },
  category: {
    type: String,
    required: [true, 'Please add a category']
  },
  coverImage: {
    type: String,
    default: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
  },
  status: {
    type: String,
    enum: ['PUBLISHED', 'DRAFT'],
    default: 'DRAFT'
  },
  readTime: {
    type: String,
    default: '5 min read'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('BlogPost', blogPostSchema);
