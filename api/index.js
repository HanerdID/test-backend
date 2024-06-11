import express from 'express';
import cors from 'cors';
import UserRoute from '../routes/UserRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => 
  console.log('Server is running on port 3000'));

module.exports = app;