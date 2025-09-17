import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import charactersRouter from "./routes/characters";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/characters", charactersRouter);

// MongoDB connection
mongoose
  .connect(process.env.DB_URI || "mongodb://localhost:27017/marvel-db")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
