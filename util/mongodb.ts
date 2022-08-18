import mongoose from 'mongoose';

const cachedConnection: any = {};

const dbConnect = async (): Promise<void> => {
  if (cachedConnection.isConnected) {
    return;
  }

  if (!process.env.MONGODB_URI) {
    console.log('MONGODB_URI Missing in environment variables');
    return;
  }

  if (!process.env.MONGODB_DB) {
    console.log('MONGODB_DB Missing in environment variables');
    return;
  }

  const db = await mongoose.connect(
    `${process.env.MONGODB_URI}/${process.env.MONGODB_DB}?retryWrites=true&w=majority`
  );

  cachedConnection.isConnected = db.connections[0].readyState;
};

export default dbConnect;
