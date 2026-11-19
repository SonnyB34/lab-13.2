import 'dotenv/config.js';
import mongoose from 'mongoose';

const URI = process.env.MONGO_URI;

export async function connectDB() {
  mongoose
    .connect(URI)
    .then(() => console.log('Successfully connected to MongoDB!'))
    .catch((err) => console.error('Connection error', err));
}
