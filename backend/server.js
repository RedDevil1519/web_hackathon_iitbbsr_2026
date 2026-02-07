
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import axios from "axios";

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(()=>console.log("MongoDB connected"))
  .catch(err=>console.log(err));

io.on("connection", socket => {
  socket.on("chat", msg => io.emit("chat", msg));
});

app.get("/api/live", async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?api_key=${process.env.NASA_KEY}`
    );
    const objects = [];
    Object.values(data.near_earth_objects).forEach(day => {
      day.forEach(ast => {
        objects.push({
          id: ast.id,
          name: ast.name,
          hazardous: ast.is_potentially_hazardous_asteroid,
          velocity: ast.close_approach_data[0]?.relative_velocity?.kilometers_per_hour || 20000,
          distance: ast.close_approach_data[0]?.miss_distance?.kilometers || 1000000
        });
      });
    });
    res.json(objects);
  } catch {
    res.status(500).send("Failed");
  }
});

server.listen(5000, () => console.log("Server running on port 5000"));
