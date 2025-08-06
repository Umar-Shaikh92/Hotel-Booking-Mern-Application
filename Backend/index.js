import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./connectDB/connectDB.js";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();
const PORT = 3000;

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json(
    {
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    }
  );
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO);
    app.listen(PORT, () => {
      console.log("Mongo DB is Connected ✅");
    });
  } catch (err) {
    console.log("Error in connecting MongoDB🚫", err);
  }
};

start();