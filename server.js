import 'dotenv/config.js';
import express from 'express';
import connectDB from './db/connection.js';
import bookRoutes from './routes/bookRoutes.js';

const app = express();
const port = process.env.port || 3000;

connectDB();

app.use(express.json());
app.use('/api/books', bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
