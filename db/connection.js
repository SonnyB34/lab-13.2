import mongoose from 'mongoose';

const URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Database connection failed:', error.message);
  }
};

export default connectDB;
