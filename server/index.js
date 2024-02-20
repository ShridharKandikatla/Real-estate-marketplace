import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err);
  });
  
const app = express();

app.listen(5000, () => {
  console.log('server is running on port 5000');
});
