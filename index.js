import express from 'express';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js';
import db from './config/Database.js';

const app = express();
app.use(
  cors({
    credential: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(UserRoute);

// app.get("/", (req, res) => res.send("Express on Vercel"));


// (async () => {
//     await db.sync();
// })();

app.listen(7676, () => 
  console.log('Server is running on port 7676'));