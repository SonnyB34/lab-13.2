import 'dotenv/config.js';
import express from 'express';
import connectDB from './db/connection.js';

const app = express();
const port = 3000;

connectDB();

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
