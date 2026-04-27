import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema({
  companyName: {
    type: String,
    default: 'Yari Tech Solutions'
  },
  businessEmail: {
    type: String,
    default: 'contact@yaritech.ph'
  },
  phoneNumber: {
    type: String,
    default: '+63 917 123 4567'
  },
  headquarters: {
    type: String,
    default: 'BGC, Taguig City, Metro Manila'
  },
  socials: {
    facebook: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    github: { type: String, default: '' },
    instagram: { type: String, default: '' }
  },
  notifications: {
    newInquiry: { type: Boolean, default: true },
    newClient: { type: Boolean, default: true },
    projectStatus: { type: Boolean, default: false }
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

const Settings = mongoose.model('Settings', settingsSchema);
export default Settings;
