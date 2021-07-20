import mongoose, { Document, Model } from 'mongoose';

export interface IBlogDocument extends Document {
  key: string;
  created: Date;
}

const blog = new mongoose.Schema({
  key: {
    type: String
  },
  content: String,
  tags: [{ type: String }],
  created: {
    type: Date,
    default: Date.now
  }
});

const model =
  (mongoose.models.blog as Model<IBlogDocument>) || mongoose.model<IBlogDocument>('blog', blog);

export default model;
