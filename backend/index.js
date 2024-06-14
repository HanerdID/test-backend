import cors from "cors";
import express from "express";
import UserRoute from "./routes/UserRoute.js";

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

app.listen(7676, () => console.log("Server is running on port 7676"));
