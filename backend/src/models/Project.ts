import mongoose, { Document, Schema } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  badge: 'ACTIVE' | 'INTERNAL' | 'BETA';
  tags: string[];
  isVisible: boolean;
  gradient: string;
}

const ProjectSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    badge: { 
      type: String, 
      enum: ['ACTIVE', 'INTERNAL', 'BETA'], 
      default: 'ACTIVE' 
    },
    tags: [{ type: String }],
    isVisible: { type: Boolean, default: true },
    gradient: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IProject>('Project', ProjectSchema);
