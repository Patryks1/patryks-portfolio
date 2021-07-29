import mongoose, { Document, Model } from 'mongoose';

export interface IBlogDocument extends Document {
  headline: string;
  tags: string[];
  content: string; // Contains HTML
  updateAt: Date;
  createdAt: Date;
}

const blog = new mongoose.Schema({
  headline: String,
  content: String,
  tags: [{ type: String }],
  updateAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const model =
  (mongoose.models.blog as Model<IBlogDocument>) || mongoose.model<IBlogDocument>('blog', blog);

export default model;
