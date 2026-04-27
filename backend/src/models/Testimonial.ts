import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: [true, 'Please add an author name']
  },
  authorRole: {
    type: String,
    required: [true, 'Please add an author role']
  },
  authorImage: {
    type: String,
    default: 'https://i.pravatar.cc/150'
  },
  content: {
    type: String,
    required: [true, 'Please add content']
  },
  rating: {
    type: Number,
    required: [true, 'Please add a rating'],
    min: 1,
    max: 5
  },
  status: {
    type: String,
    enum: ['APPROVED', 'HIDDEN'],
    default: 'APPROVED'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Testimonial', testimonialSchema);
