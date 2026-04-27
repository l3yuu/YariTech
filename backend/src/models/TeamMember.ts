import mongoose from 'mongoose';

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  role: {
    type: String,
    required: [true, 'Please add a role']
  },
  bio: {
    type: String,
    required: [true, 'Please add a bio']
  },
  image: {
    type: String,
    default: 'https://i.pravatar.cc/150'
  },
  socials: {
    twitter: String,
    linkedin: String,
    github: String
  },
  order: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('TeamMember', teamMemberSchema);
