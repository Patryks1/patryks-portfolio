import mongoose, { Document, Model } from 'mongoose';

export interface IEmptyDocument extends Document {
  key: string;
  expired: Date;
  created: Date;
}

const schema = new mongoose.Schema({
  key: {
    type: String
  },
  expired: {
    type: Date
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const model =
  (mongoose.models.schema as Model<IEmptyDocument>) ||
  mongoose.model<IEmptyDocument>('schema', schema);
export default model;
