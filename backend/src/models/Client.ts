import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a client name']
  },
  industry: {
    type: String,
    required: [true, 'Please specify an industry']
  },
  logo: {
    type: String, // URL to the logo image
    default: ''
  },
  website: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['Active', 'Past', 'Lead'],
    default: 'Active'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Client', clientSchema);
