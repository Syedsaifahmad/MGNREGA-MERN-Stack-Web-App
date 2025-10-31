import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import mgnregaRoutes from "./routes/mgnregaRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));
app.use(express.json());

// ✅ Base route
app.use("/api/mgnrega", mgnregaRoutes);

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err.message));

// ✅ Test route (check server status)
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
