import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./routes/ToDo-routes";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 4000;

// ---------- Middleware ----------
app.use(cors());
app.use(express.json());

// ---------- Health check ----------
app.get("/health", (_, res) => res.send("OK"));

// ---------- Routes ----------
app.use("/api", todoRoutes);

// ---------- DB + Server ----------
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    const server = app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });

    // ---------- Graceful shutdown ----------
    const shutdown = (signal: string) => {
      console.log(`${signal} received. Shutting down...`);

      server.close(() => {
        mongoose.connection.close(false, () => {
          console.log("MongoDB connection closed.");
          process.exit(0);
        });
      });
    };

    process.on("SIGTERM", shutdown);
    process.on("SIGINT", shutdown);
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  });
