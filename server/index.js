import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import UserRouter from './routes/user.route.js';

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use('/api/user', UserRouter);

app.listen(5000, () => {
  console.log('server is running on port 5000');
});
