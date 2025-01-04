import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import postRoutes from "./routes/postRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// Routes
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.get("/", (req, res) => res.send("Backend is running!"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
