import 'dotenv/config.js';
import express from 'express';
import { connectDB } from './db/connection.js';
import route from './routes/bookRoutes.js';

const app = express();
const port = 3000;

connectDB();

app.use(express.json());

app.use('/api', route);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
